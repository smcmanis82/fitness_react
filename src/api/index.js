import axios from "axios";

const BASE = "http://fitnesstrac-kr.herokuapp.com/api";

export async function getRoutines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateActivity(activityId) {
  try {
    const { data } = await axios.patch(`${BASE}/activities/${activityId}`);
    return data;
  } catch (error) {
    throw error;
  }
}
