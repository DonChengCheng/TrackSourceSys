package com.tracksourcesys;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.zxing.client.android.CaptureActivity;

/**
 * Created by hasee on 2017/5/5.
 */

public class ScannerModule extends ReactContextBaseJavaModule {
    private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
    private static final String E_FAILED_TO_OPEN_SCANNER = "E_FAILED_TO_OPEN_SCANNER";
    private static final String E_NO_DATA_FOUND = "E_NO_DATA_FOUND";
    private static final int SCANNER_REQUEST = 1;
    private Promise mScannerPromise;

    public ScannerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    @Override
    public String getName() {
        return "ScannerModule";
    }

    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
            if (requestCode == SCANNER_REQUEST) {
                if (mScannerPromise != null && resultCode == Activity.RESULT_OK) {
                    if (resultCode == Activity.RESULT_CANCELED) {
                        String contents = intent.getStringExtra("SCAN_RESULT");
                        if (contents == null) {
                            mScannerPromise.reject(E_NO_DATA_FOUND, "No content data found");
                        } else {
                            mScannerPromise.resolve(contents);
                        }
                    }
                    mScannerPromise = null;
                }
            }
        }
    };

    @ReactMethod
    public void scannerErcode(Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
            return;
        }
        // Store the promise to resolve/reject when picker returns data
        mScannerPromise = promise;
        try {
            Intent intent = new Intent(currentActivity, CaptureActivity.class);
            intent.setAction("com.google.zxing.client.android.SCAN");
            intent.putExtra("SAVE_HISTORY", false);
            currentActivity.startActivityForResult(intent, 0);
        } catch (Exception e) {
            mScannerPromise.reject(E_FAILED_TO_OPEN_SCANNER, e);
            mScannerPromise = null;
        }
    }

}
