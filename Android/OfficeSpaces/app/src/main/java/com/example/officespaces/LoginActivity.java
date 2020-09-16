package com.example.officespaces;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.google.android.material.textfield.TextInputEditText;

public class LoginActivity extends AppCompatActivity {

    TextInputEditText employee_id,password;
    Button signin;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_login );

        employee_id = findViewById( R.id.edit_text_employee_id );
        password = findViewById( R.id.edit_text_password );
        signin = findViewById( R.id.btn_sigin );
        signin.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent home = new Intent(LoginActivity.this,MainActivity.class);
                startActivity( home );
                LoginActivity.this.finish();
            }
        } );
    }
}