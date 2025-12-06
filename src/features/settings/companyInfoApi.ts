import { baseApi } from "../../app/baseApi";

export interface CompanyInfo {
    company_name?: string;
    company_email?: string;
    company_phone?: string;
    company_address?: string;
    social_facebook?: string;
    social_twitter?: string;
    social_linkedin?: string;
    social_instagram?: string;
    social_youtube?: string;
}

export const companyInfoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCompanyInfo: builder.query<CompanyInfo, void>({
            query: () => "/v1/public/company-info",
            transformResponse: (response: { data: CompanyInfo }) => response.data,
        }),
    }),
});

export const { useGetCompanyInfoQuery } = companyInfoApi;
