import { activateKey, deactivateKey, validateKey } from "@/utils/license";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body.type) {
    return NextResponse.json(
      {
        status: 400,
        error: "Type is required",
      },
      {
        status: 400,
      }
    );
  }
  const { type } = body;

  try {
    if (type == "activate") {
      if (!body.license_key || !body.instance_name) {
        return NextResponse.json(
          {
            status: 400,
            error: "license_key and instance_name are required",
          },
          {
            status: 400,
          }
        );
      }

      const data = await activateKey({
        license_key: body.license_key,
        instance_name: body.instance_name,
      });

      return NextResponse.json(
        {
          status: data.status,
          ...data.data,
        },
        { status: data.status }
      );
    } else if (type == "validate") {
      if (!body.license_key || !body.instance_id) {
        return NextResponse.json(
          {
            status: 400,
            error: "license_key and intance_id are required",
          },
          {
            status: 400,
          }
        );
      }

      const data = await validateKey({
        license_key: body.license_key,
        instance_id: body.instance_id,
      });

      return NextResponse.json(
        {
          status: data.status,
          ...data.data,
        },
        { status: data.status }
      );
    } else if (type == "deactivate") {
      if (!body.license_key || !body.instance_id) {
        return NextResponse.json(
          {
            status: 400,
            error: "license_key and instance_id are required",
          },
          {
            status: 400,
          }
        );
      }

      const data = await deactivateKey({
        license_key: body.license_key,
        instance_id: body.instance_id,
      });

      return NextResponse.json(
        {
          status: data.status,
          ...data.data,
        },
        { status: data.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
        error: error,
      },
      { status: 500 }
    );
  }
}
