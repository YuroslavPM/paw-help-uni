# 🐾 PawHelp
> **Connecting Hearts, Saving Paws.**

**Deployed at:** [https://paw-uni-help.vercel.app](https://paw-uni-help.vercel.app)

PawHelp is a modern platform designed to connect pet owners in need with kindness in their community. Whether it's emergency transport for a sick dog, a temporary foster home for kittens, or just a helping hand with daily walks, PawHelp makes asking for and offering help simple, safe, and reliable.

## 🌟 Features

-   **📍 Interactive Map Discovery**: Visualise requests near you in real-time.
-   **🚨 Urgency Classification**: Clear visual cues for urgent vs. normal requests.
-   **🛡️ Trust & Safety**: Verified profiles, rating systems, and community guidelines.
-   **💬 Direct Communication**: Integrated step-by-step help flow and messaging.
-   **📱 Responsive Design**: A beautiful, mobile-first experience.

## 🏗️ Architecture

PawHelp is built as a robust Full-Stack application, separating concerns for scalability and performance.

### Client-Side (Frontend)
-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **UI Library**: React with TypeScript
-   **Styling**: Tailwind CSS for modern, atomic design
-   **Icons**: Material Symbols

### Server-Side (Backend)
> *Note: The backend is designed as a high-performance REST API.*
-   **Core**: .NET 8 (ASP.NET Core Web API)
-   **Data Access**: Entity Framework Core
-   **Database**: MySQL 8.0 (Relational Data Model)
-   **Authentication**: JWT (JSON Web Tokens)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
-   Node.js 18+
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/paw-help.git
    cd paw-help
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 📂 Project Structure

```bash
src/
├── app/               # Next.js App Router pages
│   ├── map/          # Map discovery module
│   ├── requests/     # Request details & help flow
│   └── messages/     # Chat interface
├── components/        # Reusable UI components
├── data/             # Mock data & types (Client-side cache)
└── ...
```



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Built with ❤️ for animals everywhere.*
