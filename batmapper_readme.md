# BatMapper iOS

My room is sqaure-ish... rectangle for sure. Below is the video that confirms that geometry.

I open the app, put my phone horizontally, and hit record, and it instants emits a sound that feels like is piercing my ear-drums. But I resist, and walk along the edges (about 0.5 meters away) of my ro0m. The slim blue line in the picture shows my motion. As I walk, the phone starts mapping the geometry of the room. It starts drawing yellow and red dots for the points in the room where there exists walls and blue dots where there is open space.

This way we know where and how far exactly the walls are (The exact numbers are also available).

### Video and picture confirming there is space in my room and also that there are four walls. Blue represents open space and the red and yellow lines represent the walls.

<table>
  <tr>
    <td width="50%" align="center">

<img src="https://github.com/user-attachments/assets/8c83d462-6058-43ee-8069-b3601e56cd22" width="70%">

   </td>
    <td width="50%" align="center">

https://github.com/user-attachments/assets/02d54c66-d9f6-4cf8-9d7c-078b0f3b717c

   </td>
  </tr>
</table>

[BatMapper](https://www.researchgate.net/publication/317634120_BatMapper_Acoustic_Sensing_Based_Indoor_Floor_Plan_Construction_Using_Smartphones) maps the geometry of the environment (rooms, hallways) without using any photo signals. It uses your speaker and microphone!

Since Bats can't really see, they use echo-location to map out their environment to be able to catch their preys. Bats, basically, shout and, then, wait for their sound waves to bounce back from surfaces. By calculating how long the waves take to get back to them, they understand how far each "thing" is in their surrounding.

[BatMapper](https://www.researchgate.net/publication/317634120_BatMapper_Acoustic_Sensing_Based_Indoor_Floor_Plan_Construction_Using_Smartphones) showed that it is possible to implement such features in modern smartphones.

This repository represents the iOS app that builds on the paper.

## How the app works

- **Speakers**: This, obviously, is what makes the sound. We produce sounds of very specific frequencies. These specific sounds are what strike the surrounding objects and bounce back towards the phone.

- **Microphones**: After the speaker makes the sound, we wait for the sound to bouce back and hit our microphones. a standard iPhone has 4 microphones. One on the top, one on the bottom, and two in the back (near where the camera is). The 2 back microphones help get better videos and are a very new concept. It wasn't a standard when the paper was written. The app only uses the top and bottom microphones for the calculations.

- **IMU sensors**: Accelerometer and Gyroscope are used to map user movements in the environment that is getting mapped. It also helps account for and eliminate any undesired movements (like arm swings) that comes with real-life data collection.

### Putting everything together

As the user walks through an indoor environment with the app running, the device continuously emits chirps (The Sound signal), records echoes, and tracks motion using the IMU.

Each chirp provides a snapshot of nearby surfaces from the phone's current position. As more measurements are collected from different locations, the app combines them to build a larger picture of the surrounding space.

## Technical Architecture

Under the hood, BatMapper is built with a modular architecture in Swift, separating UI, orchestration, audio processing, and motion tracking.

### 1. Orchestration (`BatMapperViewModel`)

The `BatMapperViewModel` acts as the central brain of the app, running on the `MainActor`. It orchestrates the `ChirpEmitter`, `AudioRecorder`, and `MotionTracker`. It uses a high-frequency (20Hz) refresh timer to synchronize background tracking data into `@Published` properties, ensuring a smooth, reactive UI in SwiftUI. It also manages exporting the generated map to a PDF format.

### 2. Acoustic Subsystem (`AudioEngine`)

The acoustic module handles the emission of the sonar signal and the recording of the echoes.

- **ChirpEmitter**: Uses `AVAudioPlayer` to continuously loop a specific high-frequency `chirp.wav` template through the device's speakers.
- **AudioRecorder**: Leverages `AVAudioEngine` to tap the microphone bus at a high sample rate (48kHz). It extracts left and right channel audio buffers and feeds them into the signal processing pipeline on a background thread. It also applies validation heuristics to ensure only stable wall distances are passed to the view model.

### 3. Signal Processing Pipeline (`SignalProcessing`)

The core algorithm that translates raw audio into distance measurements. It runs concurrently for both audio channels and consists of several stages:

- **IIR Bandpass Filter**: Isolates the specific frequencies of the emitted chirp, removing background noise.
- **Cross-Correlation**: Matches the filtered audio against the known chirp template to pinpoint exactly when the chirp was emitted and when echoes returned.
- **Gaussian Smoothing & Peak Detection**: Smooths the correlation results and identifies local maxima (peaks), representing acoustic reflections (echoes).
- **Distance Generation**: Calculates the distance to the reflecting surface using the time delay of the peaks and the speed of sound.

### 4. Motion & Map Generation (`MotionTracker` & `InertialTracking`)

This module combines the acoustic distances with the user's movement to construct the 2D floor plan.

- **Orientation & Steps**: Uses `CMMotionManager` for device attitude (yaw) and `CMPedometer` for step detection. It includes custom smoothing to detect right-angle turns and snap orientation, compensating for drift.
- **Point Generation**: As the user walks, it interleaves their positional trace with the detected left and right wall coordinates (derived from the audio distance and current yaw).
- **Door Detection**: Monitors the history of wall distances. Sudden, temporary increases in depth (recesses) are classified as open doors and marked distinctively on the map.
- **Loop Closure**: Corrects accumulated drift in the map when the user completes a loop and returns to a previously visited area.

## Privacy First

All computation is done completely locally on your device. The app uses your microphone and speaker to generate map points in real-time, and **no data ever leaves your phone**.

## How to run it

### 1. Download the code

You can download the project as a ZIP file or clone the repository via git:

```bash
git clone https://github.com/sulabhkatila/batmapper.git
```

### 2. Compile and install using Xcode

1. Open the `MBatmaN.xcodeproj` file in Xcode.
2. Connect your iPhone to your Mac and select it as the build target at the top of the Xcode window.
3. **Sign the code**:
    - Click on the `MBatmaN` project file in the left navigator.
    - Go to the **Signing & Capabilities** tab.
    - Select your personal Apple ID in the **Team** dropdown. If you haven't added your account, you can do so in Xcode Settings > Accounts.
4. **Enable Developer Mode on your iPhone**:
    - On your iPhone, go to **Settings > Privacy & Security > Developer Mode**.
    - Turn it on and restart your phone when prompted.
    - After restarting, confirm turning on Developer Mode and enter your passcode.
5. Hit the **Run** button (the play icon) in Xcode to compile and install the app on your phone.
    - _Note: On the first installation, you might need to trust your developer certificate. On your iPhone, go to **Settings > General > VPN & Device Management**, tap your Apple ID under Developer App, and choose to "Trust" it._

### 3. Using the App

1. Open the BatMapper app on your iPhone.
2. Hold your phone **horizontally** in front of you.
3. Hit the **Record** button to start.
4. Move around the floor that you want to map. The app will emit its sonar chirps, and you will see the map geometry updating dynamically as you walk.
