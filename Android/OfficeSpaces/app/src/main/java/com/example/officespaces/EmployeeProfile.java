package com.example.officespaces;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class EmployeeProfile extends AppCompatActivity {

    TextView employee_name1,employee_name2,employee_id1,employee_id2,employee_age,employee_gender,employee_doj,employee_phone,employee_email;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_employee_profile );
        employee_name1 = findViewById( R.id.prof_employee_name );
        employee_name2 = findViewById( R.id.inp_employee_name );
        employee_id1 = findViewById( R.id.prof_employee_id );
        employee_id2 = findViewById( R.id.inp_employee_id );
        employee_age = findViewById( R.id.inp_employee_age );
        employee_gender = findViewById( R.id.inp_employee_gender );
        employee_doj = findViewById( R.id.inp_employee_doj );
        employee_phone = findViewById( R.id.inp_employee_phone );
        employee_email = findViewById( R.id.inp_employee_email );

    }
}