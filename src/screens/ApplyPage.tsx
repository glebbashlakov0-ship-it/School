"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { courses } from "../data/courses";

const schema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(6, "Phone number is required."),
  course: z.string().min(1, "Course is required."),
  exchangesChoice: z.string().min(1, "Select one exchange."),
  exchangesOther: z.string().optional(),
  walletsChoice: z.string().min(1, "Select one wallet."),
  walletsOther: z.string().optional()
}).superRefine((values, ctx) => {
  if (values.exchangesChoice === "Other" && !values.exchangesOther?.trim()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["exchangesOther"],
      message: "Please specify the exchange."
    });
  }
  if (values.walletsChoice === "Other" && !values.walletsOther?.trim()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["walletsOther"],
      message: "Please specify the wallet."
    });
  }
});

type FormValues = z.infer<typeof schema>;

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const courseQuery = searchParams?.get("course") ?? "";
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const defaultCourse = useMemo(() => {
    if (!courseQuery) return courses[0]?.title ?? "";
    const match = courses.find((c) => c.title === courseQuery);
    return match?.title ?? courseQuery;
  }, [courseQuery]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      course: defaultCourse
    }
  });

  useEffect(() => {
    setValue("course", defaultCourse);
  }, [defaultCourse, setValue]);

  const onSubmit = async (values: FormValues) => {
    const exchanges = [
      values.exchangesChoice === "Other"
        ? values.exchangesOther?.trim() || "Other"
        : values.exchangesChoice
    ];
    const wallets = [
      values.walletsChoice === "Other"
        ? values.walletsOther?.trim() || "Other"
        : values.walletsChoice
    ];

    setStatus("idle");
    setMessage("");
    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, exchanges, wallets })
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setMessage("Thank you! Our manager will contact you soon.");
      router.push("/thanks");
    } catch (err) {
      setStatus("error");
      setMessage("Submission failed. Please try again later.");
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="glass-card rounded-3xl p-8 md:p-12">
        <div className="text-sm uppercase tracking-[0.3em] text-white/50">
          Registration
        </div>
        <h1 className="mt-3 font-display text-4xl">
          Apply for free access
        </h1>
        <p className="mt-3 text-white/60">
          Fill in the form below and choose your course.
        </p>

        <form
          className="mt-8 grid gap-6 md:grid-cols-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="text-sm text-white/70">First Name</label>
            <input
              {...register("firstName")}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
              placeholder="Jane"
            />
            {errors.firstName && (
              <div className="mt-2 text-xs text-ember">
                {errors.firstName.message}
              </div>
            )}
          </div>
          <div>
            <label className="text-sm text-white/70">Last Name</label>
            <input
              {...register("lastName")}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
              placeholder="Doe"
            />
            {errors.lastName && (
              <div className="mt-2 text-xs text-ember">
                {errors.lastName.message}
              </div>
            )}
          </div>
          <div>
            <label className="text-sm text-white/70">Phone</label>
            <input
              {...register("phone")}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <div className="mt-2 text-xs text-ember">
                {errors.phone.message}
              </div>
            )}
          </div>
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input
              {...register("email")}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
              placeholder="jane@email.com"
            />
            {errors.email && (
              <div className="mt-2 text-xs text-ember">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-white/70">Course</label>
            <select
              {...register("course")}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
            >
              {courses.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
            {errors.course && (
              <div className="mt-2 text-xs text-ember">
                {errors.course.message}
              </div>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-white/70">
              Which exchanges do you use to store or manage digital assets?
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "CoinSpot",
                "Swyftx",
                "Independent Reserve",
                "CoinJar",
                "Binance",
                "Kraken",
                "Bybit",
                "Other"
              ].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <input type="radio" value={item} {...register("exchangesChoice")} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <input
              {...register("exchangesOther")}
              className="mt-3 w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
              placeholder="Other exchange"
            />
            {errors.exchangesChoice && (
              <div className="mt-2 text-xs text-ember">
                {errors.exchangesChoice.message}
              </div>
            )}
            {errors.exchangesOther && (
              <div className="mt-2 text-xs text-ember">
                {errors.exchangesOther.message}
              </div>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-white/70">
              Which wallets or custody solutions do you use to secure your assets?
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "MetaMask",
                "Trust Wallet",
                "Ledger",
                "Trezor",
                "Safe (multisig)",
                "Phantom",
                "Other"
              ].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <input type="radio" value={item} {...register("walletsChoice")} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <input
              {...register("walletsOther")}
              className="mt-3 w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white"
              placeholder="Other wallet"
            />
            {errors.walletsChoice && (
              <div className="mt-2 text-xs text-ember">
                {errors.walletsChoice.message}
              </div>
            )}
            {errors.walletsOther && (
              <div className="mt-2 text-xs text-ember">
                {errors.walletsOther.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="cta-button md:col-span-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Apply for Free Access"}
          </button>
        </form>

        {status !== "idle" && (
          <div
            className={`mt-6 rounded-2xl px-4 py-3 text-sm ${
              status === "success"
                ? "border border-accent/40 bg-accent/10 text-accent"
                : "border border-ember/40 bg-ember/10 text-ember"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </section>
  );
}
