import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";
import { courses } from "../data/courses";

const schema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(6, "Phone number is required."),
  course: z.string().min(1, "Course is required.")
});

type FormValues = z.infer<typeof schema>;

export default function ApplyPage() {
  const [searchParams] = useSearchParams();
  const courseQuery = searchParams.get("course") ?? "";
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
    setStatus("idle");
    setMessage("");
    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setMessage("Thank you! Our manager will contact you soon.");
    } catch (err) {
      setStatus("error");
      setMessage("Submission failed. Please try again later.");
    }
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="glass-card rounded-3xl p-8 md:p-12">
        <div className="text-sm uppercase tracking-[0.3em] text-white/50">
          Registration
        </div>
        <h1 className="mt-3 font-display text-4xl">
          Apply for free access
        </h1>
        <p className="mt-3 text-white/60">
          Fill in the form below. Your selected course is already attached.
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
            <label className="text-sm text-white/70">Selected Course</label>
            <div className="mt-2 rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white">
              {defaultCourse}
            </div>
            <input type="hidden" {...register("course")} />
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
