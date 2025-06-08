package com.example.practica8_1;

import android.content.Context;
import android.os.SystemClock;

import androidx.annotation.NonNull;
import androidx.work.Data;
import androidx.work.Worker;
import androidx.work.WorkerParameters;

public class TaskWorker3 extends Worker {

    public TaskWorker3(@NonNull Context context, @NonNull WorkerParameters params) {
        super(context, params);
    }

    @NonNull
    @Override
    public Result doWork() {
        SystemClock.sleep(6000);
        Data data = new Data.Builder().putString("message", "Task 3 complete").build();
        return Result.success(data);
    }
}
