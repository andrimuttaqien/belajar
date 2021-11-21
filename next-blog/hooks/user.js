import { useRouter } from "next/router";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { fetchJson } from "../pages/api/api";

const USER_QUERY_KEY = "user";
export function useSignIn() {
  const queryClient = useQueryClient();
  const mutation = useMutation(({ email, password }) =>
    fetchJson("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
  );
  return {
    signIn: async (email, password) => {
      try {
        const user = await mutation.mutateAsync({ email, password });
        queryClient.setQueryData(USER_QUERY_KEY, user);
        return true;
      } catch (err) {
        return false;
      }
    },
    signInError: mutation.isError,
    signInLoadinf: mutation.isLoading,
  };
}

export function useSignOut() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation(() => fetchJson("/api/logout"));
  return async () => {
    await mutation.mutateAsync();
    queryClient.setQueryData(USER_QUERY_KEY, undefined);
    router.push("/");
  };
}

export function useUser() {
  const query = useQuery(
    USER_QUERY_KEY,
    async () => {
      try {
        return await fetchJson("/api/user");
      } catch (err) {
        return undefined;
      }
    },
    {
      cacheTime: Infinity,
      staleTime: 30_000, //ms
    }
  );
  return query.data;
}
