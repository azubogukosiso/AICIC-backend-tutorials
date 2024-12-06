# Basic Git Commands

1.  `git init`: intializes a local git repository in the specified directory (or folder), i.e. makes it possible to use git commands to manipulate files in that directory.

2.  `git status`: checks to see the status of the files in a repository, i.e. files that have new changes, files that have been added to the staging area (or index), newly created files, etc.

3.  `git add <file>`: adds the specified file(s) to the staging area. Use `.` in place of `<file>` to add all the files in the repository to the staging area at a go. See this as setting up a rocket on its launching pad after its parts have been built and assembled in a factory.

4.  `git commit`: confirms the changes made and files added to the staging area. Use the `-m` flag to add a concise message specifying what changes were made to the files in the repository. Use an extra `-m` flag to provide a body where you can elaborate further on the details of the changes you have made. See usage below:

    ```
        git commit -m "Modify: the navbar's hover effects"

        git commit -m "Modify: the navbar's hover effects" -m "Changed the navbar's hover effects to improve the user experience and website speed"
    ```

5.  `git remote`: checks to see the remote repository that your local repository is connected to. Will display nothing if there is no remote repository connected.

6.  `git remote add origin <remote_repo_url>`: connects your local repository to a remote repository. Replace `<remote-repo-url>` with the URL of your remote repository.

7.  `git branch -M <new_branch_name>`: renames the branch name of your local repository to the specified name. Commonly used when renaming the local repository's `master` branch to `main`, to match the remote repository's `main` branch.

8.  `git push origin <branch_name>`: adds all committed files in your local repository to your remote repository in the specified branch name.

9.  `git pull origin <branch_name>`: adds all files in your remote repository to your local repository in the specified branch name.

10. `git branch <branch_name>`: creates a new branch with the specified name.

11. `git checkout <branch_name>`: switches to the specified branch.

12. `git merge <branch_name>`: merges the files and folders of the specified branch into the current branch. Both branches (i.e. the current branch and the branch to be merged) must be different.

13. `git clone <remote_repo_url>`: duplicates a repository and its content to the directory where this command was ran.

Check out this [video by Brad Traversy on using Git](https://www.youtube.com/watch?v=SWYqp7iY_Tc).

Happy learning!!!
