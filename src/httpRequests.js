import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://api.csrindustries.in';

const apiClient = axios.create({
    baseURL: BACKEND_URL,
    headers: { "Content-Type": "application/json" },
});

export async function sendContactEmail(formData) {
    try {
        const response = await apiClient.post("/send/email", formData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchGoogleReviews() {
    try {
        const response = await apiClient.get("/google/reviews");
        return response.data;
    } catch (error) {
        throw error;
    }
}