package com.example.officespaces;

import android.content.Intent;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.ProgressBar;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

public class AttendanceFragment extends Fragment {

    View view1;
    ProgressBar attendance_stats;
    TextView attendance_disp,present_days,working_days;
    ListView listView;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        view1 = inflater.inflate( R.layout.fragment_attendance, container, false );
        listView = view1.findViewById( R.id.list_qr_code );
        attendance_stats = view1.findViewById( R.id.attendance_progress );
        attendance_disp = view1.findViewById( R.id.attendance_disp );
        present_days = view1.findViewById( R.id.present_days );
        working_days = view1.findViewById( R.id.working_days );
        attendance_stats.setIndeterminate( false );
        attendance_stats.setProgress( 77 );
        attendance_disp.setText( "77%" );
        working_days.setText( "30" );
        present_days.setText( String.valueOf( (int) (0.77*30) ) );

        ArrayList<String> arrayList = new ArrayList<>(  );
        arrayList.add( "    Generate QR Code" );
        ArrayAdapter<String> arrayAdapter = new
                ArrayAdapter<String>(view1.getContext(),android.R.layout.simple_list_item_1,arrayList);
        listView.setAdapter( arrayAdapter );
        listView.setOnItemClickListener( new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                Intent qr_generate = new Intent( view1.getContext(),QRGenerator.class );
                startActivity( qr_generate );
            }
        } );
        return view1;
    }
}