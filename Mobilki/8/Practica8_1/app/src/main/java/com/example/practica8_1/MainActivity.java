package com.example.practica8_1;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.LiveData;
import androidx.work.OneTimeWorkRequest;
import androidx.work.WorkContinuation;
import androidx.work.WorkInfo;
import androidx.work.WorkManager;
import android.os.Bundle;
import android.widget.TextView;
import java.util.UUID;

public class MainActivity extends AppCompatActivity {

    TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        textView = findViewById(R.id.textViewResult);

        OneTimeWorkRequest task1 = new OneTimeWorkRequest.Builder(TaskWorker1.class).build();
        OneTimeWorkRequest task2 = new OneTimeWorkRequest.Builder(TaskWorker2.class).build();
        OneTimeWorkRequest task3 = new OneTimeWorkRequest.Builder(TaskWorker3.class).build();

        WorkManager.getInstance(this)
                .beginWith(task1)
                .then(task2)
                .then(task3)
                .enqueue();

        observeResult(task1.getId());
        observeResult(task2.getId());
        observeResult(task3.getId());
    }

    private void observeResult(UUID workId) {
        WorkManager.getInstance(this)
                .getWorkInfoByIdLiveData(workId)
                .observe(this, info -> {
                    if (info != null && info.getState().isFinished()) {
                        String message = info.getOutputData().getString("message");
                        if (message != null) {
                            textView.append(message + "\n");
                        }
                    }
                });
    }
}