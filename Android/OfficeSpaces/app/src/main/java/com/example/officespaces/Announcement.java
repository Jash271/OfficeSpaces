package com.example.officespaces;

public class Announcement {
    String title,publisher,timeStamp,description,link;

    public Announcement(String title, String publisher, String timeStamp, String description, String link) {
        this.title = title;
        this.publisher = publisher;
        this.description = description;
        this.link = link;
    }

    public Announcement(String title, String publisher, String timeStamp) {
        this.title = title;
        this.publisher = publisher;
        this.timeStamp = timeStamp;
    }

    public String getTitle() {
        return title;
    }

    public String getPublisher() {
        return publisher;
    }

    public String getTimeStamp(){
        return timeStamp;
    }

    public String getDescription() {
        return description;
    }

    public String getLink() {
        return link;
    }
}
