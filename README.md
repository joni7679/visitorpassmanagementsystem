# visitorpassmanagementsystem

A fully role-base secure Visitor Mangement System With Qr code validation, email notifications, and real-time check-in/check-out tracking...

## Project OverView

This Visitor Mangemnet Stystem is designed to mange and moitor visitor entry in an organixation using a secure role-base a architecture.
---
The Stystem Includes four roles:
- Visitor
- Employee
- Security
- Admin
## project Explantoin 
[view](:https://share.vidyard.com/watch/sySfwzdnJkqbk65UddaViL)

It impleents auhentincation, authorization, Qr Code Validation, and email notification workflows to simulate a real-world visitor approval system..

## stystem workflow
Visitor => Create Request => Employee Approval => Qr Code Generated => Security Scan => Check-In /Check-out -> Admin Monitoring.

## user Roles & Featues 

## Visitor Features

- Regisiter & Login
- Create Visit Request
- Recevie Approval / Rejection Email
- Download Qr Code Pass
---
## Employee Features

- All Visitor Requests
- Approve / Reject Requests
- Triggger Email Nofification
- Generate Qr Code

---
## security Features

- Qr Code Scanning
- Check-In/Check-out
- Invalid Pass Detection (3rd Scan Block)
- View Entry Logs

---

## Admin Features

- Crate Employee & Secuiry Accouts
- Mange Users
- Invalid Pass Detection (3rd Scan Block)
- Export System Data
- Full Dashboard Control
---

## Security Implementation

- Jwt Authentioncation
- Role-Base Authorzation
- Protected Route Middlware
- Rate Limiting
- Secure Api Validation
- Qr Code Validation Login
- Email Notification Integration
