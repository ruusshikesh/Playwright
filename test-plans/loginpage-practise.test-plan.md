# LoginPage Practise Application Test Plan

## Application Overview

Functional test coverage for the Rahul Shetty Academy LoginPage Practise app at https://rahulshettyacademy.com/loginpagePractise/. Covers initial form state, authentication success/failure, Admin and restricted User role confirmation, account-type selection, agreement checkbox, and the terms link. Each test starts from a fresh visit to the login URL and uses the public sample credentials displayed on the page (username: rahulshettyacademy; password: Learning@830$3mK2).

## Test Scenarios

### 1. Login and form behavior

**Seed:** `tests\seed.spec.ts`

#### 1.1. Verify initial form defaults and empty submission behavior

**File:** `tests\loginpage-practise\initial-form-and-empty-submit.spec.ts`

**Steps:**
  1. Open https://rahulshettyacademy.com/loginpagePractise/ in a fresh browser context.
    - expect: The LoginPage Practise page loads and remains at the login URL.
  2. Inspect the login form before interacting.
    - expect: Username and Password fields are empty.
    - expect: Admin is selected by default; User is unselected.
    - expect: Student is selected in the account-type dropdown; Teacher and Consultant are also available.
    - expect: The agreement checkbox is unchecked and the Sign In button is present.
    - expect: The page displays the sample username and password for testing.
  3. Click Sign In with both fields blank.
    - expect: The page remains on the login screen; no successful-login navigation occurs.
    - expect: No credential values are entered automatically. Record any visible validation or error message if present; the explored app showed no visible message for this submission.

#### 1.2. Sign in successfully as Admin

**File:** `tests\loginpage-practise\admin-login-success.spec.ts`

**Steps:**
  1. Open the login URL in a fresh browser context and verify Admin is selected.
    - expect: The login form is in its initial state.
  2. Enter username rahulshettyacademy and password Learning@830$3mK2, leaving the terms checkbox unchecked and the account type at Student.
    - expect: The entered username and password are visible in their respective fields; the password is masked.
  3. Click Sign In.
    - expect: Navigation succeeds to https://rahulshettyacademy.com/angularpractice/shop.
    - expect: The destination title is ProtoCommerce and the Shop Name content is displayed.
    - expect: No incorrect-credentials message is shown.

#### 1.3. Reject invalid credentials and allow correction

**File:** `tests\loginpage-practise\invalid-credentials.spec.ts`

**Steps:**
  1. Open the login URL in a fresh browser context.
    - expect: The login form is available.
  2. Enter username rahulshettyacademy and an incorrect password such as wrong-password, then click Sign In.
    - expect: The user remains on the login screen.
    - expect: An Incorrect username/password. message is displayed.
    - expect: The entered values remain editable so the user can correct the password.
  3. Replace the incorrect password with Learning@830$3mK2 and click Sign In again.
    - expect: The authentication error clears or is no longer shown after the successful attempt.
    - expect: Navigation succeeds to the ProtoCommerce shop page.

#### 1.4. Handle restricted User role confirmation

**File:** `tests\loginpage-practise\user-role-confirmation.spec.ts`

**Steps:**
  1. Open the login URL in a fresh browser context and click the User radio option.
    - expect: A confirmation prompt appears explaining that User access has fewer functionalities, with Cancel and Okay actions.
  2. Click Cancel.
    - expect: The confirmation prompt closes and the user stays on the login page.
    - expect: The login form remains available; verify the selected radio state and continue using the displayed state rather than assuming it reverted.
  3. Select Admin, then select User again to reopen the confirmation prompt; click Okay.
    - expect: The prompt closes and User remains selected.
  4. Enter username rahulshettyacademy and password Learning@830$3mK2, then click Sign In.
    - expect: Navigation succeeds to https://rahulshettyacademy.com/angularpractice/shop.
    - expect: The ProtoCommerce shop page loads.

#### 1.5. Change account type and toggle agreement checkbox

**File:** `tests\loginpage-practise\account-type-and-agreement.spec.ts`

**Steps:**
  1. Open the login URL in a fresh browser context.
    - expect: Student is selected by default in the account-type dropdown and the agreement checkbox is unchecked.
  2. Select Teacher, then Consultant, then Student from the dropdown, checking the selected option after each change.
    - expect: Each available option can be selected and remains the active selection until changed.
  3. Check and then uncheck the agreement checkbox.
    - expect: The checkbox state toggles on and off correctly.
  4. Click the terms and conditions link.
    - expect: The browser navigates to the page's # fragment (login URL ending in #); the login form stays displayed.

#### 1.6. Verify header resource links

**File:** `tests\loginpage-practise\header-resource-links.spec.ts`

**Steps:**
  1. Open the login URL in a fresh browser context and inspect the two header links.
    - expect: The Free Access to InterviewQues/ResumeAssistance/Material link points to https://rahulshettyacademy.com/documents-request.
    - expect: The QA Career Accelerator link points to https://rahulshettyacademy.com/qa-career-accelerator-job-ready.
  2. Activate each link using a new tab or window where available.
    - expect: Each link opens or navigates to its corresponding destination without breaking the original login page.
