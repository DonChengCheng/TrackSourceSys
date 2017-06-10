package com.tracksourcesys;

import android.support.annotation.Nullable;
import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by hasee on 2017/6/6.
 */

public class ReactMyTextManager  extends SimpleViewManager<TextView> {
    private final static String REACT_CLASS = "ReactMyText";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected TextView createViewInstance(ThemedReactContext reactContext) {
        return new TextView(reactContext);
    }

    @ReactProp(name = "text")
    public void setContent(TextView view, @Nullable String content) {
        view.setText(content);
    }
}
