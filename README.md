<br/>
<div align="center">
<a href="https://this-is-wild-oasis.vercel.app/">
<img src="https://github.com/sorenaV/the-wild-oasis/blob/assets/assets/logo-light.png?raw=true" alt="Logo" width="80" height="80">
</a>
<h3 align="center">The Wild Oasis</h3>
<p align="center">
An advanced React-based hotel management system for efficient operations! 🏨
<br/>
<br/>
<a href="https://this-is-wild-oasis.vercel.app/"><strong>View Demo »</strong></a>
<br/>
<br/>  
<a href="https://github.com/sorenaV/the-wild-oasis/issues/new">Report Bug</a>
</p>
</div>

## About The Project

![Product Screenshot](https://raw.githubusercontent.com/sorenaV/the-wild-oasis/assets/assets/app-cover.webp?raw=true)

The Wild Oasis is a React-based hotel management system designed for staff to handle cabins, bookings, and guests. Built with React, styled-components, and React Query, it leverages Supabase for backend services. The app incorporates advanced React techniques, such as HOCs, the Compound Component Pattern, and React Router, ensuring a seamless user experience for efficient hotel operations management.

### Built With

The Wild Oasis Hotel Management App was built using the following technologies:

- [React](https://reactjs.org)
- [Styled-components](https://styled-components.com/)
- [React Hot Toast](https://react-hot-toast.com)
- [Supabase](https://supabase.com)
- [React Router](https://reactrouter.com/en/main)
- [React Query](https://tanstack.com/query/latest)
- [Vite](https://vitejs.dev/)
- [Date-fns](https://date-fns.org/)

### Key Features

1. **User Authentication and Management**

   - Only hotel employees can access the app, ensuring secure and restricted usage.
   - Employees must log in to perform tasks.
   - New user sign-ups are restricted to within the application to guarantee only hotel employees can create accounts.
   - Users can upload an avatar, and change their name and password.

2. **Dashboard Overview**

   - Initial app screen displays a dashboard with important information for the last 7, 30, or 90 days.
   - Includes a list of guests checking in and out on the current day, with the ability to perform these tasks directly from the dashboard.
   - Statistics on recent bookings, sales, check-ins, and occupancy rate.
   - Charts showing daily hotel sales (both total and extras like breakfast) and stay duration statistics.

3. **Cabin Management**

   - **Table View**: Displays all cabins with photo, name, capacity, price, and current discount.
   - **CRUD Operations**: Users can create, update, and delete cabins, including the ability to upload photos.

4. **Booking Management**

   - **Table View**: Lists all bookings with details such as arrival and departure dates, status, paid amount, and cabin and guest information.
   - **Status Filtering**: Bookings can be filtered by their status: "unconfirmed" (booked but not yet checked in), "checked in", or "checked out".
   - **Booking Details**: Includes number of guests, number of nights, guest observations, breakfast booking, and breakfast price.
   - Users can delete, check in, or check out a booking as the guest arrives.
   - On check-in, users can confirm payment (received outside the app) and add breakfast for the entire stay if not already booked.

5. **Guest Management**

   - Guest data includes full name, email, national ID, nationality, and a country flag for easy identification.

6. **Application Settings**

   - Users can define application-wide settings such as breakfast price, minimum and maximum nights per booking, and maximum guests per booking.

7. **Dark Mode**
   - The app supports a dark mode for a better user experience in low-light environments.

## Usage

The Wild Oasis Hotel Management App provides an intuitive interface for hotel staff to handle day-to-day operations seamlessly:

- **Manage Cabins**: Add, update, and delete cabin information.

- **Manage Bookings**: View and approve guest bookings.

- **Create Users**: Add new users to help manage hotel operations.

- **Dashboard**: Access all key information in one central location.

## Contact

Sorena Vali - [@sorenavali](https://twitter.com/sorenavali) - SorenaVali@proton.me
