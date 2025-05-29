## Steps to Deploy to Production

1. **Switch to the `main` branch**:
    ```bash
    git checkout main
    ```

2. **Build the project**:
    ```bash
    npm run build
    ```

3. **Switch to the `production` branch**:
    ```bash
    git checkout production
    ```

4. **Copy the contents of the `dist/` folder to the `production` branch**:
    ```bash
    cp -r dist/* .
    ```

5. **Stage the changes**:
    ```bash
    git add .
    ```

6. **Commit the changes**:
    ```bash
    git commit -m "Deploy production build vX.X"
    ```

7. **Push the changes to the `production` branch**:
    ```bash
    git push origin production
    ```

---

### Notes:
- Replace `vX.X` with the appropriate version number or relevant message for the build.
- Make sure that the `dist/` folder contains the production build of your app.
