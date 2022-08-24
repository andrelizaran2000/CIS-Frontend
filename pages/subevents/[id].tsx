// Modules
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

// Hooks
import useAllRequests from '../../queries/useAllRequests';
import GlobalContainer from '../../components/containers/GlobalContainer';
import PaddingContainer from '../../components/containers/PaddingContainer';

export default function SubeventPage () {

  const router = useRouter()
  const { id } = router.query;
  const { useGetSubeventInformationMutation } = useAllRequests();
  const { mutate, data } = useGetSubeventInformationMutation();
  const [ titlePage, setTitlePage ] = useState('Cargando');

  useEffect(() => {
    if (id !== undefined) mutate(Number(id))
  }, [id]);

  useEffect(() => {
    if (data !== undefined) console.log(data)
  }, [data])
  

  return (
  <GlobalContainer title={titlePage}>
    <PaddingContainer>

    </PaddingContainer>
  </GlobalContainer>
  )
}
