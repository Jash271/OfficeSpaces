package com.example.officespaces;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.method.LinkMovementMethod;
import android.widget.TextView;

public class AnnouncementDisplayer extends AppCompatActivity {

    TextView header,time,publisher,message,link;
    int index;

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



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_announcement_displayer );

        index = getIntent().getIntExtra( "INDEX",-1 );

        header = findViewById( R.id.disp_ann_head );
        time = findViewById( R.id.disp_ann_time );
        publisher = findViewById( R.id.disp_ann_publish );
        message = findViewById( R.id.disp_ann_message );
        link = findViewById( R.id.disp_ann_link );
        link.setMovementMethod( LinkMovementMethod.getInstance() );

        if(index!=-1){
            header.setText( ann_head[index] );
            time.setText( timeS );
            publisher.setText( ann_pub[index] );
            message.setText( ann_mess[index] );
        }


    }
}