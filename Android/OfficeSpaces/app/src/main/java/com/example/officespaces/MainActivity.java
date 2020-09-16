package com.example.officespaces;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.ProgressBar;

import com.google.android.material.bottomnavigation.BottomNavigationMenu;
import com.google.android.material.bottomnavigation.BottomNavigationView;

public class MainActivity extends AppCompatActivity {

    BottomNavigationView bottomNav;
    ProgressBar load;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_main );
        load = findViewById( R.id.loadBar );
        load.setVisibility( View.INVISIBLE );
        bottomNav = findViewById( R.id.nav_bottom );
        bottomNav.setOnNavigationItemSelectedListener( navListener );
        loadFragment( new HomeFragment() );
    }
    private BottomNavigationView.OnNavigationItemSelectedListener navListener = new BottomNavigationView.OnNavigationItemSelectedListener() {
        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            switch (item.getItemId()){
                case R.id.action_home:
                    loadFragment( new HomeFragment() );
                    break;
                case R.id.action_announcement:
                    load.setVisibility( View.VISIBLE );
                    loadFragment( new AnnouncementFragment(load) );
                    break;
                case R.id.action_attendance:
                    loadFragment( new AttendanceFragment() );
                    break;
            }
            return true;
        }
    };

    public void loadFragment(Fragment frag)
    {
        FragmentManager fm = getSupportFragmentManager();
        FragmentTransaction ft = fm.beginTransaction();
        ft.replace(R.id.fragment_container,frag,"My_Fragment");
        ft.addToBackStack(null);
        ft.commit();
    }
}