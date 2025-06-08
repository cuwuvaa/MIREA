package com.example.prac9_1;

import android.content.Context;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class MainActivity extends AppCompatActivity {
    private static String FILE_NAME_KEY;
    private static String FILE_CONTENT_KEY;
    private static String RESULT_TEXT_KEY;
    private EditText fileNameEditText;
    private EditText fileContentEditText;
    private TextView resultTextView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        fileNameEditText = findViewById(R.id.fileNameEditText);
        fileContentEditText = findViewById(R.id.fileContentEditText);
        resultTextView = findViewById(R.id.resultTextView);
        findViewById(R.id.createButton).setOnClickListener(v -> createFile());
        findViewById(R.id.appendButton).setOnClickListener(v -> appendToFile());
        findViewById(R.id.readButton).setOnClickListener(v -> readFile());
        findViewById(R.id.deleteButton).setOnClickListener(v -> showDeleteDialog());
    }
    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        outState.putString(FILE_NAME_KEY, fileNameEditText.getText().toString());
        outState.putString(FILE_CONTENT_KEY, fileContentEditText.getText().toString());
        outState.putString(RESULT_TEXT_KEY, resultTextView.getText().toString());
    }
    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        fileNameEditText.setText(savedInstanceState.getString(FILE_NAME_KEY));
        fileContentEditText.setText(savedInstanceState.getString(FILE_CONTENT_KEY));
        resultTextView.setText(savedInstanceState.getString(RESULT_TEXT_KEY));
     }
    private void toastmsg(String message) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show();
    }
    private void createFile() {
        String fileName = fileNameEditText.getText().toString();
        String content = fileContentEditText.getText().toString();

        try (FileOutputStream fos = openFileOutput(fileName, Context.MODE_PRIVATE)) {
            fos.write(content.getBytes());
            toastmsg("Файл создан");
        } catch (IOException e) {
            e.printStackTrace();
            toastmsg("Ошибка при создании файла");
        }
    }

    private void appendToFile() {
        String fileName = fileNameEditText.getText().toString();
        String content = fileContentEditText.getText().toString();

        try (FileOutputStream fos = openFileOutput(fileName, Context.MODE_APPEND)) {
            fos.write(("\n" + content).getBytes());
            toastmsg("Текст добавлен в файл");
        } catch (IOException e) {
            e.printStackTrace();
            toastmsg("Ошибка при записи в файл");
        }
    }

    private void readFile() {
        String fileName = fileNameEditText.getText().toString();

        try (FileInputStream fis = openFileInput(fileName)) {
            BufferedReader reader = new BufferedReader(new InputStreamReader(fis));
            StringBuilder sb = new StringBuilder();
            String line;

            while ((line = reader.readLine()) != null) {
                sb.append(line).append("\n");
            }

            resultTextView.setText(sb.toString());
            toastmsg("Файл прочитан");
        } catch (IOException e) {
            e.printStackTrace();
            resultTextView.setText("");
            toastmsg("Файл не найден");
        }
    }

    private void deleteFile() {
        String fileName = fileNameEditText.getText().toString();
        File file = new File(getFilesDir(), fileName);

        if (file.delete()) {
            resultTextView.setText("");
            toastmsg("Файл удален");
        } else {
            toastmsg("Ошибка при удалении файла");
        }
    }

    private void showDeleteDialog() {
        new AlertDialog.Builder(this)
                .setTitle("удаление")
                .setMessage("Вы хотите удалить этот файл?")
                .setPositiveButton("Да", (dialog, which) -> deleteFile())
                .setNegativeButton("Нет", null)
                .show();
    }
}
