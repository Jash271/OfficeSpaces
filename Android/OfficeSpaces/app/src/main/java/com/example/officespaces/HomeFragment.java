package com.example.officespaces;

import android.content.Intent;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.TextView;


public class HomeFragment extends Fragment {

    View view;
    WebView webView;
    TextView view_profile;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        view = inflater.inflate( R.layout.fragment_home,null );
        webView = view.findViewById( R.id.calenderView );
        view_profile = view.findViewById( R.id.view_profile );
        webView.getSettings().setJavaScriptEnabled( true );
        webView.setWebViewClient( new WebViewClient() );
        webView.loadUrl( "https://calendar.google.com/calendar/r?tab=rc" );

        view_profile.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View view1) {

                Intent displayProfile = new Intent(view.getContext(),EmployeeProfile.class);
                startActivity( displayProfile );
            }
        } );

        return view;
    }
}