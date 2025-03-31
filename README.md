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
<script src="https://your-cdn-url/mpesa-plugin.min.js"></script>
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

### Styling Best Practices

1. **Responsive Design**
   - Always include media queries for mobile devices
   - Use relative units (rem, em) instead of fixed pixels
   - Test on various screen sizes

2. **Accessibility**
   - Maintain sufficient color contrast
   - Ensure focus states are visible
   - Add appropriate ARIA labels

3. **Performance**
   - Use CSS transitions instead of animations when possible
   - Avoid complex box-shadows on mobile
   - Minimize the use of filters and blurs

4. **Maintainability**
   - Group related styles together
   - Use consistent naming conventions
   - Comment complex CSS rules

## Usage Examples

### Basic Implementation

```javascript
const mpesa = new MpesaPlugin({
  apiKey: "your-api-key",
  apiEndpoint: "https://api.example.com",
  onSuccess: (response) => {
    console.log("Payment successful:", response);
  },
  onError: (error) => {
    console.error("Payment failed:", error);
  }
});

// Open payment modal
mpesa.pay(1000, "Order #123");
```

### Customized UI

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
    logoUrl: "path/to/logo.png"
  },
  onSuccess: (response) => {
    console.log("Payment successful:", response);
  }
});
```

### Direct Payment Processing

```javascript
// Process payment without UI
mpesa.processDirectPayment(1000, "254712345678", "Order #123")
  .then(response => {
    console.log("Payment completed:", response);
  })
  .catch(error => {
    console.error("Payment error:", error);
  });
```

## Response Format

### Success Response
```javascript
{
  transactionId: string;    // Unique transaction ID
  status: "success";        // Transaction status
  message: string;          // Transaction message
  resultCode: string;       // M-Pesa result code
  resultDesc: string;       // M-Pesa result description
}
```

### Error Response
```javascript
{
  message: string;          // Error message
  code?: string;           // Error code (if available)
}
```

## Phone Number Format

The plugin expects phone numbers in the following format:
- Must start with "254" (Kenya's country code)
- Must be 12 digits long
- Example: "254712345678"

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Security Considerations

1. Always use HTTPS for your API endpoint
2. Keep your API key secure
3. Validate server responses
4. Implement proper error handling
5. Use appropriate CORS settings

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this plugin in your projects.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

### Preventing CSS Class Conflicts

The plugin's CSS classes are prefixed with `mpesa-` to prevent conflicts with parent application styles. However, if you need to ensure complete isolation, you can use the following approaches:

1. **Using CSS Namespace**
```javascript
const mpesa = new MpesaPlugin({
  // ... other config
  ui: {
    customStyles: `
      /* All styles will be scoped to .mpesa-plugin */
      .mpesa-plugin {
        /* Your custom styles */
      }
      
      /* Target specific elements within the plugin */
      .mpesa-plugin .modal-content {
        /* Modal styles */
      }
      
      .mpesa-plugin .input-field {
        /* Input styles */
      }
    `
  }
});
```

2. **Using CSS Modules or CSS-in-JS**
If you're using a modern build system, consider using CSS Modules or CSS-in-JS to automatically scope your styles.

3. **Using Shadow DOM (Experimental)**
```javascript
const mpesa = new MpesaPlugin({
  // ... other config
  ui: {
    useShadowDOM: true, // This will create an isolated DOM tree
    customStyles: `
      /* Styles will be scoped to the shadow DOM */
      :host {
        /* Your custom styles */
      }
    `
  }
});
```

4. **Using Specific Class Names**
```javascript
const mpesa = new MpesaPlugin({
  // ... other config
  ui: {
    customStyles: `
      /* Use more specific class names */
      .mpesa-payment-modal {
        /* Modal styles */
      }
      
      .mpesa-payment-input {
        /* Input styles */
      }
      
      .mpesa-payment-button {
        /* Button styles */
      }
    `
  }
});
```

### Best Practices for Avoiding Style Conflicts

1. **Always Use Namespace**
   - Prefix all custom classes with `mpesa-`
   - Use nested selectors to increase specificity
   - Avoid using generic class names

2. **Use Specific Selectors**
```css
/* Good - Specific */
.mpesa-plugin .modal-content .input-field {
  /* Styles */
}

/* Bad - Generic */
.input-field {
  /* Styles */
}
```

3. **Avoid Global Styles**
```css
/* Good - Scoped */
.mpesa-plugin {
  font-family: Arial, sans-serif;
}

/* Bad - Global */
body {
  font-family: Arial, sans-serif;
}
```

4. **Use CSS Custom Properties**
```javascript
const mpesa = new MpesaPlugin({
  ui: {
    customStyles: `
      .mpesa-plugin {
        --mpesa-primary-color: #4F46E5;
        --mpesa-secondary-color: #6B7280;
      }
      
      .mpesa-plugin .btn-primary {
        background-color: var(--mpesa-primary-color);
      }
    `
  }
});
```

5. **Reset Styles Within Plugin**
```javascript
const mpesa = new MpesaPlugin({
  ui: {
    customStyles: `
      .mpesa-plugin {
        /* Reset styles */
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
        /* Prevent inheritance from parent */
        font-family: inherit;
        line-height: inherit;
      }
    `
  }
});
```

### Handling Parent Application Styles

If you're experiencing conflicts with parent application styles, you can:

1. **Override Parent Styles**
```javascript
const mpesa = new MpesaPlugin({
  ui: {
    customStyles: `
      .mpesa-plugin {
        /* Override parent styles */
        all: initial;
        display: block;
        
        /* Restore necessary styles */
        box-sizing: border-box;
        font-family: system-ui, -apple-system, sans-serif;
      }
    `
  }
});
```

2. **Use Higher Specificity**
```css
/* Increase specificity to override parent styles */
body .mpesa-plugin .modal-content {
  /* Styles */
}
```

3. **Use !important (Last Resort)**
```css
/* Only use when absolutely necessary */
.mpesa-plugin .input-field {
  border-color: #4F46E5 !important;
}
```
