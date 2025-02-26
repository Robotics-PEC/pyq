
<p align="center">
  <img src="https://img.shields.io/github/license/Robotics-PEC/pyq" alt="GitHub License">
  <img src="https://img.shields.io/github/stars/Robotics-PEC/pyq?style=flat" alt="GitHub Repo stars">
  <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/Robotics-PEC/pyq">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/Robotics-PEC/pyq?style=flat">
  <a href="https://gitpod.io/#https://github.com/Robotics-PEC/pyq.git"><img src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"></a>
</p>

# pyq

## About The Project

PEC Paper is an open source project started to help PEC students find previous year papers in one place, hence helping them to prepare for exams.

## How to Upload a Question Paper

> [!NOTE]  
> The Upload button on the UI does not work, it is a work in progress, till then use github to upload your question papers.

### Step 1: Fork the Repository

1. Go to the [pyq Repository](https://github.com/Robotics-PEC/pyq).
2. Click the **Fork** button at the top-right corner.
3. This will create a copy of the repository under your GitHub account.

### Step 2: Clone Your Fork

1. Open a terminal and run the following command to clone the repository:
   ```sh
   git clone https://github.com/YOUR-USERNAME/pyq.git
   ```
2. Navigate to the repository directory:
   ```sh
   cd pyq
   ```

### Step 3: Create a Directory for the Paper

> [!IMPORTANT]  
> Insure that you follow the following format and only upload `PDF` files, otherwise the request will be declined.

1. Navigate to the `Papers` directory:
   ```sh
   cd Papers
   ```
2. Create a new directory following this structure:
   ```
   Papers/
   ├── <Course Name>/
   │   ├── <Year>/
   │   │   ├── Mid-Term.pdf
   │   │   ├── End-Term.pdf
   ```
3. Add the PDF file inside the respective directory

### Step 4: Update `paper.json`

1. Navigate to the `src/data/` directory:
   ```sh
   cd ../../src/data/
   ```
2. Open `paper.json` in a text editor.
3. Add an entry in the following format:
   ```json
   {
      "name": "Computer Communication Network",
      "course_code": "EC2212",
      "resources": {
         "pyqs": [
            {
               "year": 2022,
               "file": "Mid-Term.pdf"
            }
         ]
      }
   }
   ```
4. Save the file.

### Step 5: Commit and Push Changes

1. Stage the changes:
   ```sh
   git add Papers/ src/data/paper.json
   ```
2. Commit the changes:
   ```sh
   git commit -m "Added Computer Communication Network 2022 Mid-Term Paper"
   ```
3. Push the changes to your fork:
   ```sh
   git push origin main
   ```

### Step 6: Create a Pull Request

1. Go to your forked repository on GitHub.
2. Click on **Compare & pull request**.
3. Provide a meaningful title and description.
4. Click **Create pull request**.

Your contribution will be reviewed and merged by the repository maintainers!

## Reporting Issues

If you encounter a bug or have a feature request, please report it using the [issue tracker](https://github.com/Robotics-PEC/pyq/issues).

## Homage to the Original Creators

> [!NOTE]  
> This is supposed to be a fork of the [PEC-CSS/PEC-Previous-Year-Papers](https://github.com/PEC-CSS/PEC-Previous-Year-Papers), but I only took Papers from there and Created a new Front End.

<img alt="Original Creators" src="https://contrib.rocks/image?repo=PEC-CSS/PEC-Previous-Year-Papers">

## Current Contributors

<img alt="Current Creators" src="https://contrib.rocks/image?repo=Robotics-PEC/pyq">
