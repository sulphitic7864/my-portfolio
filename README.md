<h1><a href="https://ui-lib.com/downloads/matx-react-dashboard/">Matx React Material Design Admin Dashboard Template</a></h1>

<a href="https://matx-react-free.netlify.app/"><img alt="Matx React Admin" src="https://ui-lib.com/blog/wp-content/uploads/2021/09/matx-github.png" /></a>

<p>SulphiticCo is a full-featured React Material UI Admin Dashboard template. SulphiticCo is built with React, Redux & Material UI We implemented all the features you might need to start a new Web application. The free version includes all Material UI components, Form elements, and validation, JWT authentication, Sign in, sign up pages,  Vertical navigation, Lazy loading, Code splitting.</p>

<h2>Features</h2>
<table>
<tr>
<th>SulphiticCo Free</th>
<th>SulphiticCo Pro</th>
</tr>
<tr>
<td>
<a href="https://matx-react-free.netlify.app/">Live Preview</a> <br>
<a href="https://ui-lib.com/downloads/matx-react-dashboard/">Download SulphiticCo</a>
</td>
<td>
<a href="http://matx-react.ui-lib.com/">Live Preview</a> <br>
<a href="https://ui-lib.com/downloads/matx-pro-react-admin/">Get SulphiticCo Pro</a>
</td>
</tr>
<tr>
<td valign="top">
<ul>
  <li>JWT authentication</li>
  <li>Role based authentication</li>
  <li>Lazy loading components</li>
  <li>Code splitting</li>
  <li>Dashboard Analytics</li>
  <li>UI kits
    <ul>
      <li>Autocomplete</li>
      <li>Buttons</li>
      <li>Checkbox</li>
      <li>Dialog</li>
      <li>Expansion panel</li>
      <li>Menu</li>
      <li>Progress</li>
      <li>Datetime picker</li>
      <li>Radio</li>
      <li>Switch</li>
      <li>Slider</li>
      <li>Snackbar</li>
      <li>Data table</li>
    </ul>
  </li>
  <li>Forms
    <ul>
      <li>Basic</li>
      <li>Rich text editor</li>
    </ul>
  </li>
  <li>eChart</li>
  <li>Session pages
    <ul>
      <li>Sign in</li>
      <li>Sign up</li>
      <li>Forgot password</li>
      <li>Error page</li>
    </ul>
  </li>
  <li>Drag and drop</li>
  <li>Google map</li>
  <li>Utilities
    <ul>
      <li>Color</li>
      <li>Spacing</li>
      <li>Typography</li>
      <li>Display</li>
    </ul>
  </li>
  <li>Multi level menu</li>
</ul>
</td>
<td valign="top">
<ul>
  <li>All features of SulphiticCo free +</li>
  <li>Firebase authentication</li>
  <li>Auth0 authentication</li>
  <li>Horizontal navigation</li>
  <li>Pages
    <ul>
        <li>Customer List</li>
        <li>Customer View/Add/Edit</li>
        <li>Product List</li>
        <li>Customer View/Add/Edit</li>
        <li>Order List</li>
        <li>Order View/Add/Edit</li>
        <li>Help center</li>
        <li>FAQ</li>
        <li>Pricings</li>
        <li>User List/Grid/Row</li>
    </ul>

  </li>
  <li>Forms
    <ul>
      <li>Order form</li>
      <li>Invoice form</li>
      <li>Property listing form</li>
      <li>Single upload</li>
      <li>Multiple upload</li>
      <li>Wizard</li>
    </ul>
  </li>
  <li>Working Apps
    <ul>
      <li>CRUD table</li>
      <li>Shop/eCommerce</li>
      <li>Scrum board</li>
      <li>Invoice builder</li>
      <li>Event calendar</li>
      <li>Chat</li>
      <li>Inbox</li>
      <li>Todo</li>
    </ul>
  </li>
  <li>Lists
    <ul>
      <li>Row/Grid List</li>
      <li>Infinite scroll list</li>
    </ul>
  </li>
  <li>Charts
    <ul>
      <li>eChart</li>
      <li>Rechart</li>
      <li>Victory chart</li>
      <li>React vis</li>
    </ul>
  </li>
  <li>Account setting</li>
  <li>User profile</li>
  <li>6 month support</li>

</ul>
</td>
</tr>
</table>

# Version 3.1.0 - 02-03-2023

- Updated : All Project Dependencies
- Updated : Code Structure `routes.jsx`
- Removed : Redux Setup & Unused Dependency

<h2>Version 3 changes</h2>

- Added Material UI – Styled api (v5)
- Added Material UI updated components from MUI@version 5
- Added React Apex Chart
- Updated JWT authentication
- Updated Charts
- Removed CSS Utilities (replaced by MUI)
- Removed SASS Integrigration (replaced by Styled API)
- Removed Victory chart (Replaced by React Apex Chart)

<h2 id="availablescripts">Getting started</h2>

<p>In the project directory, you can run:</p>

<h3 id="npmstart"><code>npm start</code></h3>

<p>Runs the app in the development mode.<br>
Open <a href="http://localhost:3000">http://localhost:3000</a> to view it in the browser.</p>

<p>The page will reload if you make edits.<br>
You will also see any lint errors in the console.</p>

<h3 id="npmrunbuild"><code>npm run build</code></h3>

<p>Builds the app for production to the <code>build</code> folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.</p>

<p>The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!</p>

<h3>Download</h3>
Download From <a href="https://ui-lib.com/downloads/matx-react-dashboard/">official website</a>

<h3>For questions and support mail us at <a href="mailto:support@ui-lib.com">support@ui-lib.com</a></h3>

<h2>Local upload deployment</h2>
<p>This project supports two upload modes:</p>
<ul>
  <li><strong>Local upload server</strong> — a small Node/Express endpoint that saves files into <code>public/uploads</code>. Useful for local development or Node-capable hosting.</li>
  <li><strong>Cloud storage (Cloudinary)</strong> — direct client uploads to Cloudinary so the frontend can remain fully static.</li>
</ul>

<h2>Cloudinary (fully static uploads)</h2>
<p>If you want to keep the app static (no backend), Cloudinary is a good option. The project contains client-side Cloudinary support that uploads files directly from the browser using an unsigned upload preset.</p>

<h3>Quick setup</h3>
<ol>
  <li>Create a Cloudinary account at <a href="https://cloudinary.com">cloudinary.com</a>.</li>
  <li>Open the Dashboard and note your <strong>cloud name</strong>.</li>
  <li>Go to <strong>Settings → Upload → Upload presets</strong> and create a new preset with <strong>Signing Mode</strong> set to <em>Unsigned</em>. Optionally configure allowed formats and max file size.</li>
  <li>Create a `.env` file in the project root with these values (don't commit `.env`):
    <pre>
REACT_APP_USE_CLOUDINARY=true
REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your-unsigned-preset
    </pre>
  </li>
  <li>Restart the dev server (`npm start`). The upload helper will detect Cloudinary and upload directly to Cloudinary, returning `secure_url`s which your app stores in Firestore.</li>
</ol>

<h3>How it works in this project</h3>
<ul>
  <li>The helper `src/app/utils/localUpload.js` checks environment variables and performs Cloudinary uploads when configured.</li>
  <li>When Cloudinary is enabled, uploads are sent to <code>https://api.cloudinary.com/v1_1/&lt;cloud_name&gt;/auto/upload</code> with `upload_preset` and optional `folder`.</li>
  <li>The helper returns the uploaded file URLs (Cloudinary `secure_url`) which are saved to Firestore by the UI code that calls the helper.</li>
  <li>If Cloudinary is not enabled, the helper falls back to the local upload server at `/api/uploads` (or `http://localhost:5001/api/uploads` in development).</li>
</ul>

<h3>Test using curl</h3>
<p>Replace placeholders and run from your machine:</p>
<pre>
curl -X POST "https://api.cloudinary.com/v1_1/your-cloud-name/auto/upload" \
  -F "file=@/full/path/to/image.jpg" \
  -F "upload_preset=your-unsigned-preset" \
  -F "folder=myapp/profiles"
</pre>

<h3>Security notes</h3>
<ul>
  <li>Unsigned uploads are convenient but less restrictive. Limit the unsigned preset by allowed formats, max file size, and optionally enable request origin restrictions in Cloudinary.</li>
  <li>For stronger security, implement signed uploads: the browser requests a signature from a server endpoint you control, then posts the signed request to Cloudinary.</li>
</ul>

<h3>Production</h3>
<p>With Cloudinary, your frontend can be deployed as static files (Netlify, Vercel, S3, etc.) and still support file uploads from the browser. If you choose signed uploads, add a tiny server endpoint to generate signatures.</p>
