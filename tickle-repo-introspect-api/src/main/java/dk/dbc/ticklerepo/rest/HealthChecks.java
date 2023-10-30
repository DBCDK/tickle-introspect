package dk.dbc.ticklerepo.rest;

import org.eclipse.microprofile.health.HealthCheck;
import org.eclipse.microprofile.health.HealthCheckResponse;
import org.eclipse.microprofile.health.Readiness;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Produces;

@ApplicationScoped
public class HealthChecks {

    @Produces
    @Readiness
    public HealthCheck databaseLookup() {
        return () -> HealthCheckResponse.named("database-lookup")
                .status(true)
                .build();
    }
}
