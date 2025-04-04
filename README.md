# M-Pesa Payment Plugin

A lightweight, customizable M-Pesa payment plugin that provides a seamless integration for accepting M-Pesa payments in your web application. Built with Preact and TypeScript, this plugin offers a modern, responsive UI with customizable styling options.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 🔧 Fully customizable styling and branding
- 📱 Mobile-friendly design
- 🔒 Secure payment processing
- ⚡ Lightweight and fast
- 🔄 Real-time payment status updates
- 🎯 Easy integration with any web application

## Installation

### CDN (Recommended)

Add the following script to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/17g01acs028/plugin/mpesa-plugin.min.js"></script>
```


## Quick Start

```javascript
// Initialize the plugin
const mpesa = new MpesaPlugin({
  apiKey: "your-api-key",
  apiEndpoint: "your-api-endpoint",
  onSuccess: (response) => {
    console.log("Payment successful:", response);
  },
  onError: (error) => {
    console.error("Payment failed:", error);
  }
});

// Open payment modal
mpesa.pay(1000, "Order #123")
  .then(response => {
    console.log("Payment completed:", response);
  })
  .catch(error => {
    console.error("Payment error:", error);
  });
```

## Configuration Options

### Basic Configuration

```javascript
{
  apiKey: string;          // Your M-Pesa API key
  apiEndpoint: string;     // Your API endpoint URL
  onSuccess?: Function;    // Callback for successful payments
  onError?: Function;      // Callback for failed payments
}
```

### UI Customization

```javascript
{
  ui: {
    primaryColor?: string;     // Primary color for buttons and focus states
    secondaryColor?: string;   // Secondary color for buttons
    backgroundColor?: string;  // Modal background color
    textColor?: string;        // Main text color
    borderRadius?: string;     // Border radius for elements
    fontFamily?: string;       // Custom font family
    buttonStyle?: "rounded" | "square" | "pill";  // Button style options
    modalWidth?: string;       // Custom modal width
    showLogo?: boolean;        // Whether to show a logo
    logoUrl?: string;         // URL for the logo image
    customStyles?: string;    // Additional custom CSS
  }
}
```

### UI Customization with CSS Classes

The plugin provides several CSS classes that you can target for custom styling. Here are the available classes and their purposes:

```css
/* Modal Container */
.mpesa-modal {
  /* Main modal wrapper */
}

.modal-content {
  /* Modal content container */
}

/* Form Elements */
.input-field {
  /* Input fields styling */
}

/* Buttons */
.btn-primary {
  /* Primary action button */
}

.btn-secondary {
  /* Secondary action button */
}

/* Loading States */
.loading-overlay {
  /* Full-screen loading overlay */
}

.loading-spinner {
  /* Loading spinner animation */
}

/* Status Messages */
.error-message {
  /* Error message container */
}

.success-message {
  /* Success message container */
}

/* Amount Display */
.amount-display {
  /* Amount information container */
}

/* Description */
.payment-description {
  /* Payment description container */
}
```

### Advanced Styling Example

Here's a comprehensive example of customizing the plugin's appearance:

```javascript
const mpesa = new MpesaPlugin({
  apiKey: "your-api-key",
  apiEndpoint: "https://api.example.com",
  ui: {
    primaryColor: "#4F46E5",
    secondaryColor: "#6B7280",
    backgroundColor: "#FFFFFF",
    textColor: "#1F2937",
    borderRadius: "0.75rem",
    fontFamily: "'Inter', sans-serif",
    buttonStyle: "pill",
    modalWidth: "32rem",
    showLogo: true,
    logoUrl: "path/to/logo.png",
    customStyles: `
      /* Custom Modal Styling */
      .mpesa-modal {
        backdrop-filter: blur(8px);
      }

      .modal-content {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(79, 70, 229, 0.1);
      }

      /* Input Field Styling */
      .input-field {
        transition: all 0.3s ease;
        border-width: 2px;
      }

      .input-field:focus {
        transform: translateY(-1px);
        box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.1);
      }

      /* Button Styling */
      .btn-primary {
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 600;
        transition: all 0.3s ease;
      }

      .btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2);
      }

      .btn-secondary {
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 600;
      }

      /* Loading Spinner Animation */
      .loading-spinner {
        border-top-color: #4F46E5;
      }

      /* Amount Display */
      .amount-display {
        font-size: 1.5rem;
        font-weight: 700;
        color: #4F46E5;
      }

      /* Error Message Styling */
      .error-message {
        border-left: 4px solid #EF4444;
        background-color: #FEF2F2;
      }

      /* Success Message Styling */
      .success-message {
        border-left: 4px solid #10B981;
        background-color: #ECFDF5;
      }

      /* Payment Description */
      .payment-description {
        font-size: 0.875rem;
        color: #6B7280;
      }

      /* Responsive Design */
      @media (max-width: 640px) {
        .modal-content {
          width: 90%;
          margin: 1rem;
        }

        .amount-display {
          font-size: 1.25rem;
        }
      }
    `
  },
  onSuccess: (response) => {
    console.log("Payment successful:", response);
  }
});
```
