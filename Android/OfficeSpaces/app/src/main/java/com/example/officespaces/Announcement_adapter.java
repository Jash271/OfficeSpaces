package com.example.officespaces;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class Announcement_adapter extends RecyclerView.Adapter<Announcement_adapter.AnnouncementViewHolder> {

    Context context;
    List<Announcement>announcementList;

    public Announcement_adapter(Context context, List<Announcement> announcementList) {
        this.context = context;
        this.announcementList = announcementList;
    }

    @NonNull
    @Override
    public AnnouncementViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        LayoutInflater inflater = LayoutInflater.from( context );
        View view = inflater.inflate( R.layout.list_view,null );
        AnnouncementViewHolder holder = new AnnouncementViewHolder( view );
        return holder;
    }

    @Override
    public void onBindViewHolder(@NonNull AnnouncementViewHolder holder, int position) {
        Announcement announcement = announcementList.get(position);
        String h =announcement.getTitle();
        String p = announcement.getPublisher();
        String t = announcement.getTimeStamp();
        holder.head.setText( h );
        holder.publish.setText( p );
        holder.time.setText( t );
    }

    @Override
    public int getItemCount() {
        return announcementList.size();
    }

    public class AnnouncementViewHolder extends RecyclerView.ViewHolder
    {

        TextView head,publish,time;

        public AnnouncementViewHolder(@NonNull View itemView) {
            super( itemView );

            head = itemView.findViewById( R.id.ann_head );
            publish = itemView.findViewById( R.id.ann_pub );
            time = itemView.findViewById( R.id.ann_time );

            itemView.setOnClickListener( new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Intent display = new Intent( context,AnnouncementDisplayer.class );
                    display.putExtra( "INDEX",getAdapterPosition() );
                    context.startActivity( display );
                }
            } );


        }
    }

}
