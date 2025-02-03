import { DfLogoutUsecase } from "@/application/usecases/auth/DfLogoutUsecase";
import { SbAuthRepository } from "@/infrastructure/repositories/SbAuthRepository";
import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    const authRepository = new SbAuthRepository();
    const logoutUsecase = new DfLogoutUsecase(authRepository);

    await logoutUsecase.execute();

    const redirectUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/login`;

    const response = NextResponse.json({
      redirectUrl,
    });

    response.headers.set(
      "Set-Cookie",
      "userId=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0"
    );

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "알 수 없는 에러가 발생했습니다." },
      { status: 500 }
    );
  }
};
