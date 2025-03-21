# Modern Banking Dashboard

A modern, responsive banking dashboard built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive interface for managing banking operations, transactions, and account settings.

## 🚀 Features

- **Dashboard Overview**: Real-time visualization of account balances and transaction history
- **Transaction Management**: View and manage all your financial transactions
- **Account Management**: Handle multiple accounts and their settings
- **Investment Tracking**: Monitor your investment portfolio
- **Credit Card Management**: Manage your credit cards and related services
- **Loan Services**: Access and manage loan information
- **Privilege Services**: View and utilize premium banking services
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and intuitive user interface with dark/light mode support
- **Form Management**: Robust form handling with React Hook Form
- **Type Safety**: Full TypeScript support for enhanced development experience

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.0.0
- **Type System**: TypeScript 5.7.2
- **Routing**: React Router DOM 6.30.0
- **Styling**: Tailwind CSS 3.4.17
- **Form Management**: React Hook Form 7.54.2
- **Charts**: Recharts 2.15.1
- **Build Tool**: Vite 6.2.0
- **Package Manager**: npm/yarn
- **Code Quality**: ESLint 9.21.0
- **Icons**: Hero Icons 2.2.0

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone (https://github.com/Gru2014/financial-dashboard.git)
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🏗️ Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
│   ├── common/     # Shared components (Button, Input, etc.)
│   ├── dashboard/  # Dashboard-specific components
│   ├── icons/      # SVG icons components
│   └── layout/     # Layout components (Sidebar, Header)
├── contexts/       # React context providers
├── hooks/          # Custom React hooks
├── pages/          # Page components
├── services/       # API and service functions
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 💻 Development

### Code Style

- Follow the ESLint configuration
- Use TypeScript for all new files
- Follow component organization patterns in the codebase
- Use Tailwind CSS for styling

### Component Structure

- Keep components small and focused
- Use TypeScript interfaces for props
- Implement proper error handling
- Follow React best practices
