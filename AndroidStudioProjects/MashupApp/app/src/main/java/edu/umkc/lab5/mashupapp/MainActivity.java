package edu.umkc.lab5.mashupapp;

import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.webkit.WebView;
import android.widget.Button;


public class MainActivity extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button callServiceButton = (Button)(findViewById(R.id.b1));

        final WebView webServiceView = (WebView) (findViewById(R.id.page1));
        webServiceView.getSettings().setJavaScriptEnabled(true);
        callServiceButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                webServiceView.loadUrl("file:///android_asset/Lab3.html");
            }
        });

        Button callWebServiceButton = (Button)(findViewById(R.id.b2));
        final WebView webServiceView2 = (WebView) (findViewById(R.id.page2));
        webServiceView2.getSettings().setJavaScriptEnabled(true);
        callWebServiceButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                System.out.println("task2");
                webServiceView2.loadUrl("file:///android_asset/task2.html");
            }
        });

    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
