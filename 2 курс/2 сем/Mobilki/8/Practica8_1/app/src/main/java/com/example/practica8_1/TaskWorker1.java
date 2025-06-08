package com.example.practica8_1;

import android.content.Context;
import android.os.SystemClock;

import androidx.annotation.NonNull;
import androidx.work.Data;
import androidx.work.Worker;
import androidx.work.WorkerParameters;

public class TaskWorker1 extends Worker {

    public TaskWorker1(@NonNull Context context, @NonNull WorkerParameters params) {
        super(context, params);
    }

    @NonNull
    @Override
    public Result doWork() {
        SystemClock.sleep(1000);
        Data data = new Data.Builder()
                .putString("message", "Задача 1 завершена")
                .build();
        return Result.success(data);
    }
}