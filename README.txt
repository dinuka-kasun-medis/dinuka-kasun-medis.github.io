Personal Website with Rocket and Rust
======================================

Description
-----------
This project is a simple personal website built using Rust and the Rocket web framework. It provides a basic homepage, a blog section where you can list, view, and add new blog posts. Blog posts are stored in-memory for demonstration purposes.

Features
--------
- Homepage displaying a welcome message.
- Blog section:
  - List all blog posts.
  - View individual blog posts by ID.
  - Add new blog posts via an HTML form.
- State management using Rocket’s built-in State and a Mutex-protected vector.
- Form handling for creating new posts.

Dependencies
------------
- **Rocket**: A web framework for Rust (version 0.5.0-rc.2 with features `form` and `json`).
- **Serde**: Serialization framework for Rust (version 1.0 with the `derive` feature).

Installation
------------
1. **Install Rust:**  
   Ensure that you have Rust installed. You can get Rust via [rustup](https://rustup.rs).

2. **Clone the Repository:**  
   Clone this project repository or download the source code files.

3. **Update Dependencies:**  
   Make sure your `Cargo.toml` file includes the necessary dependencies:
   ```toml
   [dependencies]
   rocket = { version = "0.5.0-rc.2", features = ["form", "json"] }
   serde = { version = "1.0", features = ["derive"] }
