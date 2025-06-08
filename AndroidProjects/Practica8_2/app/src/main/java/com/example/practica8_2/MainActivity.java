package com.example.practica8_2;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.LiveData;
import androidx.work.OneTimeWorkRequest;
import androidx.work.WorkInfo;
import androidx.work.WorkManager;
import android.os.Bundle;
import android.widget.TextView;
import java.util.Arrays;
import java.util.UUID;

public class MainActivity extends AppCompatActivity {

    TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        textView = findViewById(R.id.textViewResult);

        OneTimeWorkRequest taskA = new OneTimeWorkRequest.Builder(ParallelWorkerA.class).build();
        OneTimeWorkRequest taskB = new OneTimeWorkRequest.Builder(ParallelWorkerB.class).build();

        WorkManager.getInstance(this).enqueue(Arrays.asList(taskA, taskB));

        observeResult(taskA.getId());
        observeResult(taskB.getId());
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
