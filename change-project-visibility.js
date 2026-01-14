const SONAR_URL = process.env.SONARQUBE_URL || 'http://localhost:9000';
const SONAR_TOKEN = process.env.SONARQUBE_TOKEN;
const BITBUCKET_CONFIG_KEY = 'bitbucket-cloud-config'; // El nombre que pusiste en el paso 2

async function onboardBitbucketRepo(repoSlug, projectKey, projectName) {
  try {
    // Esta API de SonarQube vincula el repo de Bitbucket
    const response = await fetch(`${SONAR_URL}/api/alm_projects/import`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SONAR_TOKEN}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        almSetting: BITBUCKET_CONFIG_KEY,
        projectKey: projectKey,
        projectName: projectName,
        repositorySlug: repoSlug
      }),
    });

    if (response.ok) {
      console.log(`✅ Proyecto ${projectName} vinculado correctamente en SonarQube.`);
    } else {
      const errorData = await response.json();
      console.error(`❌ Error:`, errorData);
    }
  } catch (error) {
    console.error('Error en la conexión:', error.message);
  }
}

// Ejemplo de uso
onboardBitbucketRepo('mi-repo-slug', 'org_mi-proyecto-clave', 'Mi Proyecto de Bitbucket');