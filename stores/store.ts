import { defineStore } from 'pinia'
import rationShop from '~/assets/ration-shop-jpg.jpg'
import hostel from '~/assets/Hostel-jpg.jpg'
import hotel from '~/assets/Hotel-jpg.jpg'
import demo_video from '~/assets/Demo_Video.mp4'

export const useMainStore = defineStore('store', {
    state: () => ({
        repos: [
            {
                name: "Hotel Management System",
                description: "A complete Java desktop application using Swing, AWT, and MySQL for managing hotel guest registrations, room bookings, billing, and availability.",
                image: hotel,
                video: "",
                tools: ["Java", "Swing", "MySQL"],
                features: ["Admin Login", "Guest registration and management", "Room booking with check-in/check-out", "View booking history", "Check room availability", "Auto billing based on stay duration"],
                dateCompleted: "May 2022",
                githubLink:"https://github.com/KR-08/Hotel_Management_System",
            },
            {
                name: "Smart Weighment & Automated Billing System for Ration Shops",
                description: "An IoT-based smart ration system using RFID cards to automate the distribution of food grains like rice and sugar. This system helps ensure transparency, automation, and user authentication in public distribution.",
                image: rationShop,
                video: demo_video,
                tools: ["ESP32", "RFID Reader(RC522)", "Servo Motors", "LCD Display", "C++", "Python Script as Backend"],
                features: ["RFID-based user authentication", "Auto-dispensing of grains via servo motors", "LCD display for status updates", "Python-based UID verification", "Bill generation and transaction logging", "Real-time inventory tracking"],
                dateCompleted: "Sep 2025",
                githubLink:"https://github.com/KR-08/Smart-Weighment-Automated-Billing-System-for-Ration-Shops"
            },
            {
                name: "Hostel Management System",
                description: "A lightweight frontend-based hostel management system built using HTML, CSS and JavaScript with localStorage.",
                image: hostel,
                video: "",
                tools: ["HTML", "CSS", "JavaScript"],
                features: ["Student registration and listing with search/filter", "Room allocation with blocks", "Leave application form", "Fee tracking with printable receipts", "Admin login panel", "Export student/fee records to CSV"],
                dateCompleted: "July 2025",
                githubLink:"https://github.com/KR-08/Hostel_Management_System"
            },
        ],
        projectData: [],
        modalData: null
    }),
    actions: {
        setPortfolioDetails(details: any) {
            this.modalData = details;
        },
    }
})

