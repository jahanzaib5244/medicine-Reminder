package com.cgitmed_reminder;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.os.Bundle;


import com.emekalites.react.alarm.notification.BundleJSONConverter;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import org.json.JSONObject;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "cgitmed_reminder";
  }
   @Override
   protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
   }


}
