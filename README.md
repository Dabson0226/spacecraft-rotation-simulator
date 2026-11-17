# Orbital Lab — Spacecraft Rotation Simulator

A GitHub Pages-ready Space Science project showing torque-free rigid-body rotation and the intermediate axis theorem. Features stylized ISS, Hubble, and Voyager 1 models, adjustable initial angular velocity, 3D orbit camera, live energy/angular momentum, and educational explanations.

## Publish on GitHub Pages

1. Create a public GitHub repository named `spacecraft-rotation-simulator`.
2. Upload **all four website files** (`index.html`, `style.css`, `script.js`, `physics.js`) to the repository root. You may also upload this README.
3. Go to **Settings → Pages → Build and deployment**.
4. Choose **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
5. Your website will appear at `https://YOUR-USERNAME.github.io/spacecraft-rotation-simulator/` after deployment.

## Run locally

Because the site uses ES modules, serve it over HTTP rather than opening the HTML file with `file://`. From this directory, run `python -m http.server 8000` and visit `http://localhost:8000`.

The site loads Three.js and Google Fonts from the internet. Internet access is required.

## Physics

- The 3D orientation is integrated using body-fixed angular velocity and quaternion rotations.
- Angular velocity evolves using torque-free Euler equations, integrated with RK4 at 240 Hz simulation time steps.
- The inertia values are **illustrative, simplified principal moments**, not verified spacecraft engineering data. The spacecraft shapes are stylized, not scale-accurate.
- The simulated object is rigid and torque-free; no gravity-gradient torque, atmospheric drag, flexible structures, thrusters, or internal damping.
- For an ideal rigid body, energy and angular momentum magnitude are conserved (up to numerical integration error). Stable axes are the minimum and maximum principal inertia axes; intermediate-axis rotation is unstable to perturbations.
- The initial velocity sliders use rad/s; the rotation is angular, not translational. The simulator does not measure phone motion or simulate a phone throw.

## Suggested presentation

1. Select Hubble and try the minimum axis preset.
2. Reset and try the intermediate axis preset; watch the tumbling develop.
3. Explain why the spacecraft doesn't settle to a stable axis without damping.
4. Compare the different spacecraft's assumed moments of inertia and rotational kinetic energies.

## References for the theory

- [NASA Glenn Research Center — Moment of Inertia](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/moment-of-inertia/)
- [Euler's equations (rigid body dynamics)](https://en.wikipedia.org/wiki/Euler%27s_equations_(rigid_body_dynamics))
- [Tennis racket theorem](https://en.wikipedia.org/wiki/Tennis_racket_theorem)
