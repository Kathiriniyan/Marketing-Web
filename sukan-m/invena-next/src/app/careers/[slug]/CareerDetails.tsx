"use client";

import { useMemo, useState, useRef } from "react";
import { notFound, useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { careers } from "@/lib/careers";
import {
    UploadCloud,
    Briefcase,
    Banknote,
    MapPin,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function formatBytes(bytes: number) {
    if (!Number.isFinite(bytes)) return "";
    const units = ["B", "KB", "MB", "GB"];
    let value = bytes;
    let i = 0;
    while (value >= 1024 && i < units.length - 1) {
        value = value / 1024;
        i++;
    }
    return `${value.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

export default function CareerDetails() {
    const params = useParams<{ slug: string }>();
    const slug = params?.slug;

    const job = useMemo(() => careers.find((j) => j.slug === slug), [slug]);

    if (!slug) return null;
    if (!job) return notFound();

    const [cvFile, setCvFile] = useState<File | null>(null);
    const [dragOver, setDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onFilePicked = (file?: File | null) => {
        if (!file) return;

        const allowed = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        const name = file.name.toLowerCase();
        const extOk = name.endsWith(".pdf") || name.endsWith(".doc") || name.endsWith(".docx");
        const typeOk = allowed.includes(file.type);

        if (!typeOk && !extOk) {
            toast.error("Please upload a PDF, DOC, or DOCX file.");
            clearCV();
            return;
        }

        setCvFile(file);
    };

    const clearCV = () => {
        setCvFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!cvFile) {
            toast.error("Please upload your CV before submitting.");
            return;
        }

        
        const form = e.currentTarget;
        setIsSubmitting(true);

        const formData = new FormData(form);

        try {
            const response = await fetch('/api/career', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Submission failed');
            }

            toast.success("Application submitted successfully!");

            // Clear the form and state
            if (form) {
                form.reset();
            }
            clearCV();
        } catch (error: any) {
            console.error("Submission error:", error);
            toast.error(error.message || "Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="career-page-main">
            <Header />
            <Toaster position="bottom-right" />

            {/* Breadcrumb */}
            <section className="rts-breadcrumb-area pt-20 xl:pt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left">
                                <span className="pre">Career Sukan M</span>
                                <span className="bg-title">Career</span>
                                <h1 className="title rts-text-anime-style-1">{job.title}</h1>
                                <p className="disc mt-3">{job.intro}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-area">
                    <img src="/assets/images/about/shape/01.png" alt="shape" className="one" />
                    <img src="/assets/images/about/shape/02.png" alt="shape" className="two" />
                    <img src="/assets/images/about/shape/03.png" alt="shape" className="three" />
                </div>
            </section>

            {/* Content */}
            <section className="pb-20 sm:pb-40">
                <div className="container">
                    <div className="mx-auto space-y-10 sm:space-y-20">
                        {/* Top: Job Details */}
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                            {/* Header strip */}
                            <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 sm:p-8">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            {job.intro}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                                            {job.type}
                                        </span>
                                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                                            {job.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Job Facts */}
                                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                    <div className="grid grid-cols-1 sm:grid-cols-3">
                                        {/* Experience */}
                                        <div className="p-4 sm:p-5">
                                            <div className="flex items-start gap-3">
                                                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                                                    <Briefcase className="h-5 w-5" />
                                                </span>

                                                <div className="min-w-0">
                                                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                                                        Experience
                                                    </p>
                                                    <p className="mt-1 text-sm font-semibold text-slate-900">
                                                        {job.experience || "Not specified"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Salary */}
                                        <div className="border-t border-slate-200 p-4 sm:border-t-0 sm:border-l sm:p-5">
                                            <div className="flex items-start gap-3">
                                                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                                                    <Banknote className="h-5 w-5" />
                                                </span>

                                                <div className="min-w-0">
                                                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                                                        Salary
                                                    </p>
                                                    <p className="mt-1 text-sm font-semibold text-slate-900">
                                                        {job.salary || "Negotiable"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="border-t border-slate-200 p-4 sm:border-t-0 sm:border-l sm:p-5">
                                            <div className="flex items-start gap-3">
                                                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                                                    <MapPin className="h-5 w-5" />
                                                </span>

                                                <div className="min-w-0">
                                                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                                                        Location
                                                    </p>
                                                    <p className="mt-1 text-sm font-semibold text-slate-900">
                                                        {job.location || "Not specified"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-6 sm:p-8">
                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                    {/* Responsibilities */}
                                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                                        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                                            Responsibilities
                                        </h3>
                                        <ul className="mt-4 space-y-3">
                                            {job.responsibilities.map((item) => (
                                                <li key={item} className="flex gap-3 text-sm text-slate-700">
                                                    <span className="mt-3 h-2 w-2 flex-none rounded-full bg-primary" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Skills */}
                                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                                        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                                            Skills
                                        </h3>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {job.skills.map((item) => (
                                                <span
                                                    key={item}
                                                    className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom: Apply Form */}
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-200 bg-slate-50 p-6 sm:p-8">
                                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                                    Apply for this role
                                </h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    Fill in your details and upload your CV. We’ll contact you if shortlisted.
                                </p>
                            </div>

                            <form className="p-6 sm:p-8" onSubmit={handleSubmit} encType="multipart/form-data">
                                <input type="hidden" name="role" value={job.title} />

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    {/* Role */}
                                    <div className="sm:col-span-2">
                                        <label className="font-medium text-slate-700">Role</label>
                                        <input
                                            value={job.title}
                                            readOnly
                                            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none"
                                        />
                                    </div>

                                    {/* Full name */}
                                    <div>
                                        <label className="font-medium text-slate-700">
                                            Full Name <span className="text-rose-600">*</span>
                                        </label>
                                        <input
                                            name="fullName"
                                            type="text"
                                            required
                                            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="font-medium text-slate-700">
                                            Phone <span className="text-rose-600">*</span>
                                        </label>
                                        <input
                                            name="phone"
                                            type="tel"
                                            required
                                            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
                                            placeholder="07X XXX XXXX"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="sm:col-span-2">
                                        <label className="font-medium text-slate-700">
                                            Email <span className="text-rose-600">*</span>
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    {/* Cover letter */}
                                    <div className="sm:col-span-2">
                                        <label className="font-medium text-slate-700">Cover Letter</label>
                                        <textarea
                                            name="coverLetter"
                                            rows={6}
                                            className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
                                            placeholder="Write a short message about your experience..."
                                        />
                                        <p className="mt-2 text-xs text-slate-500">
                                            mention relevant experience, tools, and notice period.
                                        </p>
                                    </div>

                                    {/* CV upload */}
                                    <div className="sm:col-span-2">
                                        <label className="font-semibold text-slate-700">
                                            Upload CV <span className="text-rose-600">*</span>
                                        </label>

                                        {/* Dropzone */}
                                        <div
                                            className={[
                                                "relative mt-3 rounded-2xl border border-dashed px-4 py-8 text-center transition",
                                                dragOver
                                                    ? "border-slate-400 bg-white ring-4 ring-slate-200"
                                                    : "border-slate-300 bg-slate-50",
                                            ].join(" ")}
                                            onDragEnter={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setDragOver(true);
                                            }}
                                            onDragOver={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setDragOver(true);
                                            }}
                                            onDragLeave={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setDragOver(false);
                                            }}
                                            onDrop={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setDragOver(false);
                                                const file = e.dataTransfer.files?.[0];
                                                onFilePicked(file);
                                            }}
                                        >
                                            <div className="flex flex-col items-center gap-3">
                                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
                                                    <UploadCloud className="h-6 w-6" />
                                                </span>

                                                {!cvFile ? (
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-semibold text-slate-900">
                                                            Drop your CV here or click to upload
                                                        </p>
                                                        <p className="text-xs text-slate-500">
                                                            Accepted formats: PDF, DOC, DOCX
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className="w-full max-w-xl">
                                                        <p className="text-sm font-semibold text-slate-900">
                                                            Selected file
                                                        </p>

                                                        <div className="mt-3 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left sm:flex-row sm:items-center sm:justify-between">
                                                            <div className="min-w-0">
                                                                <p className="truncate text-sm font-semibold text-slate-900">
                                                                    {cvFile.name}
                                                                </p>
                                                                <p className="mt-1 text-xs text-slate-500">
                                                                    {formatBytes(cvFile.size)}
                                                                </p>
                                                            </div>

                                                            <div className="flex gap-2">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => fileInputRef.current?.click()}
                                                                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                                                                >
                                                                    Change
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    onClick={clearCV}
                                                                    className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-100"
                                                                >
                                                                    Clear
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <input
                                                ref={fileInputRef}
                                                name="cv"
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                required
                                                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    onFilePicked(file ?? null);
                                                }}
                                            />
                                        </div>

                                        <p className="mt-2 text-xs text-slate-500">
                                            Please upload an up-to-date CV with your latest role and projects.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 flex w-full justify-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="rts-btn btn-primary w-full sm:w-auto text-center px-10 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit Application"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
