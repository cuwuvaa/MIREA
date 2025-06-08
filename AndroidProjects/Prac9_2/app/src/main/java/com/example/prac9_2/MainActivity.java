package com.example.prac9_2;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Environment;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class MainActivity extends AppCompatActivity {

    private static final int REQUEST_PERMISSION_CODE = 1;
    private EditText fileNameEditText, contentEditText;
    private TextView statusTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ActivityCompat.requestPermissions(this,
                new String[]{
                        Manifest.permission.WRITE_EXTERNAL_STORAGE,
                        Manifest.permission.READ_EXTERNAL_STORAGE
                },
                REQUEST_PERMISSION_CODE);
        fileNameEditText = findViewById(R.id.fileNameEditText);
        contentEditText = findViewById(R.id.contentEditText);
        statusTextView = findViewById(R.id.statusTextView);

        Button createFileButton = findViewById(R.id.createFileButton);
        Button deleteFileButton = findViewById(R.id.deleteFileButton);

        createFileButton.setOnClickListener(v -> {
                createFile();
        });

        deleteFileButton.setOnClickListener(v -> {
                deleteFile();
        });
    }
    private void createFile() {
        String fileName = fileNameEditText.getText().toString();
        String content = contentEditText.getText().toString();
        File dir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOCUMENTS);
        if (!dir.exists()) {
            if (!dir.mkdirs()) {
                statusTextView.setText("Не удалось создать директорию");
                return;
            }
        }
        File file = new File(dir, fileName);

        try (FileOutputStream fos = new FileOutputStream(file)) {
            fos.write(content.getBytes());
            statusTextView.setText("Файл создан: " + file.getAbsolutePath());
            Toast.makeText(this, "Файл создан", Toast.LENGTH_SHORT).show();
        } catch (IOException e) {
            statusTextView.setText("Ошибка: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private void deleteFile() {
        String fileName = fileNameEditText.getText().toString();
        File dir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOCUMENTS);
        File file = new File(dir, fileName);

        if (file.exists()) {
            if (file.delete()) {
                statusTextView.setText("Файл удален: " + file.getAbsolutePath());
                Toast.makeText(this, "Файл удален", Toast.LENGTH_SHORT).show();
            } else {
                statusTextView.setText("Не удалось удалить файл");
            }
        } else {
            statusTextView.setText("Файл не существует");
        }
    }
}