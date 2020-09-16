package com.example.officespaces;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.SparseArray;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.vision.CameraSource;
import com.google.android.gms.vision.Detector;
import com.google.android.gms.vision.barcode.Barcode;
import com.google.android.gms.vision.barcode.BarcodeDetector;

import java.io.IOException;

public class QRScanner extends AppCompatActivity {

    SurfaceView surfaceView;
    CameraSource cameraSource;
    TextView qr_codeD;
    BarcodeDetector barcodeDetector;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_q_r_scanner );

        surfaceView = findViewById( R.id.cameraSurface );
        qr_codeD = findViewById( R.id.scannedText );

        barcodeDetector= new BarcodeDetector.Builder(getApplicationContext())
                .setBarcodeFormats( Barcode.QR_CODE  )
                .build();
        cameraSource = new CameraSource.Builder( getApplicationContext(),barcodeDetector )
                .setRequestedPreviewSize( 640,480 )
                .setAutoFocusEnabled( true )
                .build();


        surfaceView.getHolder().addCallback( new SurfaceHolder.Callback() {
            @Override
            public void surfaceCreated(SurfaceHolder surfaceHolder) {
                if(ActivityCompat.checkSelfPermission( getApplicationContext(),Manifest.permission.CAMERA )!=PackageManager.PERMISSION_GRANTED){
                    return;
                }
                try{
                    cameraSource.start(surfaceHolder);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

            @Override
            public void surfaceChanged(SurfaceHolder surfaceHolder, int i, int i1, int i2) {

            }

            @Override
            public void surfaceDestroyed(SurfaceHolder surfaceHolder) {

            }
        } );
        barcodeDetector.setProcessor( new Detector.Processor<Barcode>() {
            @Override
            public void release() {

            }

            @Override
            public void receiveDetections(Detector.Detections<Barcode> detections) {
                final SparseArray<Barcode> qrcode = detections.getDetectedItems();
                if(qrcode.size()!=0){
                    qr_codeD.post( new Runnable() {
                        @Override
                        public void run() {
                            String qr = String.valueOf( qrcode.valueAt( 0 ) );
                            qr_codeD.setText( qrcode.valueAt( 0 ).displayValue);
                        }
                    } );
                }
            }
        } );

    }


}