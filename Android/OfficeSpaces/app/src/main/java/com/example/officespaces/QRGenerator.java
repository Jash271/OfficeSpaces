package com.example.officespaces;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.FragmentActivity;

import android.Manifest;
import android.app.KeyguardManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;

import androidx.biometric.BiometricPrompt;
import androidx.fragment.app.FragmentActivity;

import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.google.zxing.WriterException;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import androidmads.library.qrgenearator.QRGContents;
import androidmads.library.qrgenearator.QRGEncoder;

public class QRGenerator extends AppCompatActivity {

    EditText inp_code;
    ImageView disp_code;
    Button gen_code,scn_code;
    BiometricPrompt biometricPrompt;
    String code;
    Bitmap qrBits;
    QRGEncoder qrgEncoder;
    public static final int CAMERA_PERMISSION_CODE = 100;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_q_r_generator );
        inp_code = findViewById( R.id.edit_pin );
        disp_code = findViewById( R.id.disp_qr );
        disp_code.setVisibility( View.INVISIBLE );
        gen_code = findViewById( R.id.generate );
        scn_code = findViewById( R.id.scan_btn );
        gen_code.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                KeyguardManager manager  = (KeyguardManager) QRGenerator.this.getSystemService(Context.KEYGUARD_SERVICE);
                assert manager != null;
                if(manager.isKeyguardSecure()){
                    Executor executor = Executors.newSingleThreadExecutor();
                    FragmentActivity activity = QRGenerator.this;

                    biometricPrompt = new BiometricPrompt(activity,executor, new BiometricPrompt.AuthenticationCallback()
                    {
                        @Override
                        public void onAuthenticationError(int errorCode, CharSequence errString) {
                            super.onAuthenticationError( errorCode, errString );
                        }


                        @Override
                        public void onAuthenticationSucceeded(BiometricPrompt.AuthenticationResult result) {
                            super.onAuthenticationSucceeded( result );
                            displayQR();
                        }

                        @Override
                        public void onAuthenticationFailed() {
                            super.onAuthenticationFailed();

                        }
                    });

                    BiometricPrompt.PromptInfo promptInfo = new BiometricPrompt.PromptInfo.Builder()
                            .setTitle("Authentication Required")
                            .setDescription( "Place the finger on the fingerprint sensor mounted on your device" )
                            .setSubtitle( "Confirm Your Identity" )
                            .setDeviceCredentialAllowed( true )
                            .setConfirmationRequired( true )
                            .build();

                    biometricPrompt.authenticate( promptInfo );

                }else{
                    Toast.makeText( QRGenerator.this, "Please enable a lock in your device!", Toast.LENGTH_SHORT ).show();
                }


            }
        } );

        scn_code.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                checkCameraPermission( Manifest.permission.CAMERA,CAMERA_PERMISSION_CODE );
            }
        } );

    }

    public void checkCameraPermission(String permission, int requestCode){
        if(ContextCompat.checkSelfPermission( this, Manifest.permission.CAMERA ) == PackageManager.PERMISSION_DENIED){
            ActivityCompat.requestPermissions( QRGenerator.this,new String[] {Manifest.permission.CAMERA},requestCode );
        }else{
            Intent qrScan = new Intent( QRGenerator.this, QRScanner.class );
            startActivity( qrScan );
        }
    }
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResult) {
        super.onRequestPermissionsResult( requestCode, permissions, grantResult );
        if (requestCode == CAMERA_PERMISSION_CODE) {
            if (grantResult.length > 0 && grantResult[0] == PackageManager.PERMISSION_GRANTED) {
                Toast.makeText( this, "Permission Granted", Toast.LENGTH_SHORT ).show();
                Intent qrScan = new Intent( QRGenerator.this, QRScanner.class );
                startActivity( qrScan );
            } else {
                Toast.makeText( this, "Camera Permission Denied", Toast.LENGTH_SHORT ).show();
            }
        }
    }


        public void displayQR(){
        code = inp_code.getText().toString();
        qrgEncoder = new QRGEncoder( code,null, QRGContents.Type.TEXT,1000 );
        try {
            qrBits = qrgEncoder.encodeAsBitmap();
            dispQR.start();
        } catch (WriterException e) {
            e.printStackTrace();
        }
    }
    Thread dispQR = new Thread(  ){
        @Override
        public void run() {
            super.run();

            runOnUiThread( new Runnable() {
                @Override
                public void run() {
                    disp_code.setImageBitmap( qrBits );
                    disp_code.setVisibility( View.VISIBLE );
                }
            } );

        }
    };

}