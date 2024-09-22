import Image from 'next/image';

const Login = () => {
  return (
    <section className="w-full flex-center h-screen flex-col">
      <div className="grid grid-cols-2 items-center h-full">

        {/* KIRI */}
        <div className="pl-20">
          <h1 className="sign-in-header font-bold text-5xl mb-6">Sign in</h1>
          <p className="text-custom-grey">Don't have an account?
            <span> </span>
            <span className="create-now underline underline-offset-1"><a href="#">Create now</a></span>
          </p>

          <div className="form mt-8">
            <label className="text-custom-grey font-medium text-base">E-mail</label>
            <div className="border rounded-lg border-corner-grey mr-20 mt-1 mb-4">
              <input
                type="email"
                name="email"
                id="email"
                className="px-2 py-2 w-full border-none rounded-none p-0 m-0 bg-transparent focus:border-none focus:outline-none active:border-none"
                placeholder="example@gmail.com">
              </input>
            </div>

            <label className="text-custom-grey font-medium text-base">Password</label>
            <div className="border rounded-lg border-corner-grey mr-20 mt-1">
              <input
                type="password"
                name="password"
                id="password"
                className="px-2 py-2 w-full border-none rounded-none p-0 m-0 bg-transparent focus:border-none focus:outline-none active:border-none"
                placeholder="example@gmail.com">
              </input>
            </div>

            <div className="mr-20 grid grid-cols-2 mt-10">
              <div className="">
                <label className="container text-sm text-custom-grey">
                  <input type="checkbox" className="rounded border-corner-grey"></input>
                  <span> </span>Remember me
                </label>
              </div>
              <div className="flex justify-end">
                <a href="#" className="underline underline-offset-4 text-custom-green text-sm">Forgot Password?</a>
              </div>
            </div>

            <div className="mr-20 mt-10">
              <a href="/dashboard">
              <button className="border w-full rounded-2xl bg-custom-green text-white py-3">
                Sign In
              </button>
              </a>
            </div>

          </div>
        </div>
        {/* KANAN */}
        <div className="relative h-full bg-custom-green">

          <div className="absolute z-10 w-full grid justify-items-end">
            <Image src="/assets/images/elips.png" width={400} height={394} ></Image>
          </div>

          <div className="relative z-20 h-full">
            <div className="flex justify-center items-center pt-10">
              <Image src="/assets/icons/iconCS.svg" width={20} height={20}></Image>
              <h3 className="pl-2 font-semibold text-white text-sm">Analytical Dashboard</h3>
            </div>
            {/* Kartu Bawah */}
            <div className="bg-white mx-20 rounded-lg mt-16 relative">
              <div className="grid grid-cols-2">
                <div className="pl-7 grid content-center">
                  <h2 className="text-custom-green text-3xl font-bold mb-3 pr-6">Akses Dashboard</h2>
                  <p className="text-custom-grey text-xs">
                    Gunakan akun tersertifikasi kartu anda yang terdaftar pada sistem untuk mengakses dashboard
                  </p>
                  <button
                    className="border rounded-full bg-custom-green text-white py-3 mt-5 mr-16 text-xs">
                    Pelajari
                  </button>
                </div>

                <div className="relative flex items-center justify-end">
                  <Image
                    src="/assets/images/Illustration.png"
                    width={169} height={117} layout="intrinsic" quality={100}
                    className=""
                  />
                </div>
              </div>
            </div>

            {/* Kartu Atas */}
            <div className="flex justify-end mx-20 mt-[-2rem] relative z-20">
              <div className="relative z-30 w-48 bg-white rounded px-5 py-3 flex">
                <Image src="/assets/icons/IconGraph.svg" width={40} height={40} />
                <div className="pl-3">
                  <p className="text-custom-green text-xs">Earnings</p>
                  <p className="text-custom-green font-bold">$350.40</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-11">
              <h1 className="text-white text-3xl font-bold">Akses Satu Akun</h1>
            </div>
            <div className="px-24 mt-3">
                <p className="text-center text-white text-sm">
                  Analyzing previous trends ensures that businesses always make the
                  right decision. And as the scale of the decision and it’s impact magnifies...</p>
              </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;