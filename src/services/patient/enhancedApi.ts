import { RTKGeneratedApis } from '.';

const enhancedApi = RTKGeneratedApis.enhanceEndpoints({
  addTagTypes: ['Patient'], // Patient Cache, patient list api, patient tag will refer to api data
  endpoints: {
    postPatient: {
      invalidatesTags: ['Patient'], // After I call create patient API, invalidate the Patient
    },
    postPatientSearch: {
      // Patient -> Data fetching API
      providesTags: ['Patient'],
    },
    getPatientByGuid: {
      // Patient:12 -> Data fetching API
      providesTags: ['Patient'],
    },
    putPatientByGuid: {
      // If update, refetch the table list
      invalidatesTags: ['Patient'],
    },
  },
});

export const {
  usePostPatientSearchQuery,
  usePostPatientMutation, // Create
  usePutPatientByGuidMutation, // Update
} = enhancedApi;

export { enhancedApi as PatientApis };
