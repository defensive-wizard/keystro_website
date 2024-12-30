"use server";

import axios from "axios";

export async function activateKey(report: {
  license_key: string;
  instance_name: string;
}) {
  try {
    const response = await axios.post(
      "https://api.lemonsqueezy.com/v1/licenses/activate",
      {
        license_key: report.license_key,
        instance_name: report.instance_name,
      }
    );
    return response;
    // @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }

    return {
      data: {
        status: 500,
        message: "Internal Server error while making axios req",
      },
    };
  }
}

export async function validateKey(report: {
  license_key: string;
  instance_id: string;
}) {
  try {
    const response = await axios.post(
      "https://api.lemonsqueezy.com/v1/licenses/validate",
      {
        license_key: report.license_key,
        instance_id: report.instance_id,
      }
    );

    return response;
    // @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }

    return {
      data: {
        status: 500,
        message: "Internal Server error while making axios req",
      },
    };
  }
}

export async function deactivateKey(report: {
  license_key: string;
  instance_id: string;
}) {
  try {
    const response = await axios.post(
      "https://api.lemonsqueezy.com/v1/licenses/deactivate",
      {
        license_key: report.license_key,
        instance_id: report.instance_id,
      }
    );

    return response;
    // @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }

    return {
      data: {
        status: 500,
        message: "Internal Server error while making axios req",
      },
    };
  }
}
