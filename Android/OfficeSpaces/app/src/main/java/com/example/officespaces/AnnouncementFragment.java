package com.example.officespaces;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;

import java.util.ArrayList;
import java.util.List;

public class AnnouncementFragment extends Fragment {

    RecyclerView recyclerView;
    List<Announcement> announcementList;
    Announcement_adapter announcement_adapter;
    ProgressBar load;

    public AnnouncementFragment(ProgressBar lb){
        this.load = lb;
    }

    String ann_head[] = {
            "Announcement header 1",
            "Announcement header 2",
            "Announcement header 3",
            "Announcement header 4",
            "Announcement header 5",
            "Announcement header 6",
    };
    String ann_pub[] = {
            "From Publisher 1",
            "From Publisher 2",
            "From Publisher 3",
            "From Publisher 4",
            "From Publisher 5",
            "From Publisher 6",
    };
    String ann_mess[] = {
            "Message body 1",
            "Message body 2",
            "Message body 3",
            "Message body 4",
            "Message body 5",
            "Message body 6",
    };
    String timeS = "Uploaded on 19/08/2020 at 12:30 PM";
    int i;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate( R.layout.fragment_announcement, container, false );

        recyclerView = view.findViewById( R.id.recycler_1 );
        recyclerView.setHasFixedSize( true );
        recyclerView.setLayoutManager( new LinearLayoutManager( this.getActivity() ) );
        announcementList = new ArrayList<>(  );
        for(i=0;i<6;i++){
            announcementList.add( new Announcement( ann_head[i],ann_pub[i],timeS ) );
        }
        if(!announcementList.isEmpty()){
            announcement_adapter = new Announcement_adapter( getContext(),announcementList );
            recyclerView.setAdapter( announcement_adapter );
        }
        load.setVisibility( View.INVISIBLE );
        return view;
    }
}