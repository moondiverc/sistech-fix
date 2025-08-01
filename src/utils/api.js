// src/utils/api.js

export async function analyzeCV({ file, jobDescription, skillKeywords }) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("job_description", jobDescription);
  formData.append("skill_keywords", skillKeywords);

  const response = await fetch("http://127.0.0.1:8000/analyze_cv/", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.detail?.[0]?.msg || "Terjadi kesalahan saat mengirim data CV"
    );
  }

  const result = await response.json();
  return result;
}
