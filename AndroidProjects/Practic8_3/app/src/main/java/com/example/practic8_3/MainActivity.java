package com.example.practic8_3;

import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

import com.squareup.picasso.Picasso;

import org.json.JSONObject;

import java.net.URL;
import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class MainActivity extends AppCompatActivity {

    private ImageView img;
    private Button btn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        img = findViewById(R.id.imageView);
        btn = findViewById(R.id.loadButton);

        btn.setOnClickListener(v -> loadDogImage());
    }

    private void loadDogImage() {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        executor.execute(() -> {
            try {
                URL url = new URL("https://random.dog/woof.json");
                Scanner scanner = new Scanner(url.openStream());
                StringBuilder result = new StringBuilder();
                while (scanner.hasNext()) {
                    result.append(scanner.nextLine());
                }
                scanner.close();

                JSONObject jsonObject = new JSONObject(result.toString());
                String imageUrl = jsonObject.getString("url");

                runOnUiThread(() -> {
                    Picasso.get().load(imageUrl).into(img);
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }
}
